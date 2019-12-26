<template>
  <div class="sale">
    <div class="sale-wrap wrap">
      <div class="sale-filter">
        <div class="sale__filter">
            <!-- <button class="clearFilter" @click="clearFilter"> сбросить фильтр</button>
            <select-categories :categories_id="id_categories" @changeCategories='getCategories'></select-categories>
            <select-marks @cnangeMarks='getMarks' :id_categories="id_categories"></select-marks>
            <select-models @cnangeModels='getModels' :id_categories="id_categories" :id_marks="id_marks"></select-models> -->

            <div class="filter__element">
                <p class="characterisctic__filter">цена</p>
                <!-- <div class="double__input">
                    <input @change="priceAccept" class="range-slider__input double__input--left" name="price_start" id="price_start" placeholder="от" type="text" v-model="price_start_tmp">
                    <input @change="priceAccept" class="range-slider__input double__input--right" name="price_end" id="price_end" placeholder="до" type="text" v-model="price_end_tmp">
                </div>
                <div class="characterisctic__slider-block">
                    <ejs-slider class="characterisctic__slider" @changed="priceAccept" @change="priceChange" :max="value[1]" id='circle_slider' :type="typeSlider"></ejs-slider>
                </div> -->

            </div>

            <div class="filter__element">
                <p class="characterisctic__filter">год выпуска</p>
                <!-- <div class="double__input m-b_7">
                    <select @blur="changeColorSelectGray" @focus="changeColorSelect" @change="changeStartYear" name="year_start" id="year_start" class="double__input--left"  v-model="year_start">
                        <option value="null">год, от</option>
                        <template v-for="start_yaer in start_year_def" >
                            <option :value="start_yaer">{{start_yaer}}</option>
                        </template>
                    </select>
                    <select @blur="changeColorSelectGray" @focus="changeColorSelect" @change="changeEndYear" v-model="year_end" name="year_end" id="year_end" class="double__input--right">
                        <option value="null">год, до</option>
                        <template v-for="end_year in end_year_def" >
                            <option :value="end_year">{{end_year}}</option>
                        </template>
                    </select>
                </div> -->
            </div>

            <!-- <select-region @cnangeRegion='getRegion'></select-region>
            <select-city   @cnangeCities='getCities' :id_region="id_region"></select-city> -->


            <div class="filter__element m-t_30">

                <div class="checkbox__block">
                    <input v-model="warranty" id="warranty_id" name="warranty" value="1" class="checkbox__none" type="checkbox">
                    <label for="warranty_id" class="checkbox__orange"></label>
                    <span class="search__brand--name">гарантия</span>
                </div>
                <div class="checkbox__block">
                    <input v-model="customs" id="customs_id" name="customs" value="1" class="checkbox__none" type="checkbox">
                    <label for="customs_id" class="checkbox__orange"></label>
                    <span class="search__brand--name">растоможен</span>
                </div>
                <div class="checkbox__block">
                    <input v-model="state" id="state_id" name="state" value="1" class="checkbox__none" type="checkbox">
                    <label for="state_id" class="checkbox__orange"></label>
                    <span class="search__brand--name">битый или не на ходу</span>
                </div>
            </div>

        </div>

      </div>
      <div class="sale-goods">

        <div class="sale_sorting">

          <div class="button__sorting">
            <div class="radio__button--three">
              <input @click="getAlls" checked class="button__radio--one" type="radio" value="7" name="entity__radio" id="entity__radio_one">
              <label class="label__radio--one" for="entity__radio_one"><span>все <span>{{ count }}</span></span></label>
              <input @click="getNew" class="button__radio--two" type="radio" value="8" name="entity__radio" id="entity__radio_two">
              <label class="label__radio--two" for="entity__radio_two"><span>новые <span>{{ commercial }}</span></span></label>
              <input @click="getMileage" class="button__radio--three" type="radio" value="9" name="entity__radio" id="entity__radio_three">
              <label class="label__radio--three" for="entity__radio_three"><span>с пробегом <span> 0 </span></span></label>
            </div>
          </div>

          <div class="cabinet__wrap-left">
              <div class="cabinet__show">
                  <span class="cabinet__by">сортировать по: </span>
                  <span class="cabinet__number relative" @click="openedPrice = !openedPrice">{{firstSortName}}</span>
                  <div class="cabinet--price" v-show="openedPrice">
                      <div v-for="sortItem in sortsAuto" :key="sortItem.name" class="new-cabinet__inner-block" @click="changeSort_by_auto($event, sortItem)">
                          <div class="new-cabinet__circle" :class="{ paint: selected_sort_auto.name === sortItem.name }"></div>
                          <span class="new-cabinet__text" for="cabinet" :class="{ orange_color: selected_sort_auto.name === sortItem.name }">
                          {{sortItem.nameRU}}
                          </span>
                      </div>
                  </div>
              </div>

              <div class="cabinet__show--date">
                  <span class="cabinet__number relative" @click="openedDate = !openedDate">{{secondSortName}}</span>
                  <div class="cabinet--date" v-show="openedDate">
                      <div v-for="sortItem in sortsDate" :key="sortItem.name" class="new-cabinet__inner-block" @click="changeSort_by_date($event, sortItem)">
                          <div class="new-cabinet__circle" :class="{ paint: selected_sort_date.name === sortItem.name }"></div>
                          <span class="new-cabinet__text" for="cabinet" :class="{ orange_color: selected_sort_date.name === sortItem.name }">
                          {{sortItem.nameRU}}
                          </span>
                      </div>
                  </div>
              </div>
          </div>


        </div>

        <main-elements @priceMax="getMaxPrice" :mileageObjects="mileageObjects" :newObjects="newObjects" :allObjects="allObjects" @sendCount='getCounts' :clear="clear" :customsValue="customs"  :warrantyValue="warranty" :stateValue="state" :sort_by_date="sort_by_date" :sort_by_auto="sort_by_auto" :end_year="year_end" :start_year="year_start" :start_price="price_start" :end_price="price_end" :id_cities="id_cities"  :id_region="id_region" :id_models="id_models" :id_marks="id_marks" :id_categories="id_categories"></main-elements>






      </div>
    </div>
  </div>
</template>

<script>

// import MainElements from 'components/Sale/MainElements'
import MainElements from '/code/vue.js/tasks/my-project/src/components/Sale/MainElements'

export default {
  name: 'sale',
  components: {
    MainElements,
  },
  data() {
    return {
      id_region: 0,
      id_categories: 0,
      id_marks: 0,
      id_models: 0,
      id_cities: 0,
      price_start_tmp: null,
      price_end_tmp: null,
      price_start: null,
      price_end: null,
      year_start: null,
      year_end: null,
      sort_by_auto: null,
      sort_by_date: null,
      state: null,
      clear: 0,
      warranty: null,
      customs: null,
      allObjects: null,
      newObjects: null,
      mileageObjects: null,
      count: 0,
      commercial: 0,
      private: 0,
      openedPrice: false,
      openedDate: false,
      firstSortName: 'по умолчанию',
      secondSortName: 'за всё время',
      sortsAuto: [
          {name: 'default', nameRU: 'по умолчанию', value: "", selected: true},
          {name: 'price_asc', nameRU: 'цене (сначало дешевые)', value: 1, selected: false},
          {name: 'price_desc', nameRU: 'цене (сначало дорогие)', value: 2, selected: false},
          {name: 'year_desc', nameRU: 'году (сначало новые)', value: 3, selected: false},
          {name: 'year_asc', nameRU: 'году (сначало старые)', value: 4, selected: false},
          {name: 'mileage_asc', nameRU: 'по пробегу', value: 5, selected: false},
      ],
      sortsDate: [
          {name: 'default', nameRU: 'за все время', value: 1, selected: true},
          {name: 'price_asc', nameRU: 'за сутки', value: 2, selected: false},
          {name: 'price_desc', nameRU: 'за 2 дня', value: 3, selected: false},
          {name: 'year_desc', nameRU: 'за неделю', value: 4, selected: false},
          {name: 'year_asc', nameRU: 'за 2 недели', value: 5, selected: false},
          {name: 'mileage_asc', nameRU: 'за месяц', value: 6, selected: false},
      ]
    }
  },
  methods: {
    getCounts(data) {
      this.count = data.count;
      this.commercial = data.commercial;
      this.private = data.private;
    },
    // clearWork (data) {
    //   this.clear = 0;
    //   this.id_categories = null;
    //   this.id_marks = 0;
    //   this.id_region = 0;
    //   this.price_start = null;
    //   this.price_end = null;
    //   this.year_start = null;
    //   this.year_end = null;
    //   this.state = null;
    //   this.warranty = null;
    //   this.customs = null;
    // },
    getMaxPrice (maxPrice) {
      this.maxPrice = maxPrice;
      this.value[1] = maxPrice;
    },
    changeSort_by_auto (elem, sortItem) {
      if (sortItem.name == 'price_asc') {
          elem.target.parentElement.parentElement.style.right = "-9px";
      } else if (sortItem.name == 'price_desc') {
          elem.target.parentElement.parentElement.style.right = "-13px";
      } else if (sortItem.name == 'year_desc') {
          elem.target.parentElement.parentElement.style.right = "-29px";
      } else if (sortItem.name == 'year_asc') {
          elem.target.parentElement.parentElement.style.right = "-25px";
      } else if (sortItem.name == 'mileage_asc') {
          elem.target.parentElement.parentElement.style.right = "-94px";
      } else {
          elem.target.parentElement.parentElement.style.right = "-74px";
      }
      this.sortsAuto.forEach(s => s.selected = s.name === sortItem.name)
      this.firstSortName = this.selected_sort_auto.nameRU;
      this.sort_by_auto = this.sort_auto;
      this.openedPrice = false;

    },
    changeSort_by_date (elem, sortItem) {
      if (sortItem.name == 'price_asc') {
          elem.target.parentElement.parentElement.style.right = "-42px";
      } else if (sortItem.name == 'price_desc') {
          elem.target.parentElement.parentElement.style.right = "-42px";
      } else if (sortItem.name == 'year_desc') {
          elem.target.parentElement.parentElement.style.right = "-27px";
      } else if (sortItem.name == 'year_asc') {
          elem.target.parentElement.parentElement.style.right = "-19px";
      } else if (sortItem.name == 'mileage_asc') {
          elem.target.parentElement.parentElement.style.right = "-37px";
      } else {
          elem.target.parentElement.parentElement.style.right = "-11px";
      }
      this.sortsDate.forEach(s => s.selected = s.name === sortItem.name)
      this.secondSortName = this.selected_sort_date.nameRU;
      this.sort_by_date = this.sort_date;
      this.openedDate = false;
    },
    getAlls (emit) {
      // $('.label__radio--two').css({borderRight:"1px solid #C4C4C4"});
      this.allObjects = emit.target.value;
    },
    getNew (emit) {
      // $('.label__radio--two').css({borderRight:"1px solid #C4C4C4"});
      this.newObjects = emit.target.value;
    },

    getMileage (emit) {
      // $('.label__radio--two').css({borderRight:"1px solid transparent"});
      this.mileageObjects = emit.target.value;
    },
  },
  computed: {
    selected_sort_auto () {
        return this.sortsAuto.find(s => s.selected)
    },
    sort_auto () {
        return this.selected_sort_auto.value || 0
    },
    selected_sort_date () {
        return this.sortsDate.find(s => s.selected)
    },
    sort_date () {
        return this.selected_sort_date.value || 0
    }
  }
}
</script>

<style scoped>

.sale {
  background: #EBEEF2;
  min-height: 600px;
  height: 100%;
}

.sale-filter {

}

.sale-goods {

}


</style>
