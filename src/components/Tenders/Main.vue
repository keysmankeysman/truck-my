<template>
  <div class="search">
    <section  class="content__mid">
        <div class="tenders__wrap wrap">

            <div class="tenders__filter">
                <div class="tenders__search">
                    <input placeholder="введите наименование, организацию или ИНН..." class="tenders__search--input" type="text">
                    <button class="tenders__search--btn">найти</button>
                </div>

                <div class="tenders__calendar">
                    <!-- <select class="tenders__calendar--select">
                        <option value="">дата публикации</option>
                    </select> -->

                    <div class="tenders__show">
                        <!-- <span class="cabinet__by">сортировать по: </span> -->
                        <span class="tenders__number--high relative" @click="openedPrice = !openedPrice">{{firstSortName}}</span>
                        <div class="tenders--price" v-show="openedPrice">
                            <div v-for="sortItem in sortsAuto" :key="sortItem.name" class="new-tenders__inner-block" @click="changeSort_by_auto($event, sortItem)">
                                <div class="new-tenders__circle" :class="{ paint: selected_sort_auto.name === sortItem.name }"></div>
                                <span class="new-tenders__text" for="cabinet" :class="{ orange_color: selected_sort_auto.name === sortItem.name }">
                                {{sortItem.nameRU}}
                                </span>
                            </div>
                        </div>
                    </div>




                    <div class="tenders__calendar--inputs">
                        <!-- <datepicker
                                v-model="form.period_start"
                                placeholder="с"
                                :format="format"
                                :language="ru"
                                :calendar-button-icon="icon"
                                @selected="sendFilter"
                        >
                        </datepicker>
                        <datepicker
                                @selected="sendFilter"
                                :format="format"
                                :language="ru"
                                v-model="form.period_end"
                                placeholder="по">
                        </datepicker> -->
                    </div>
                </div>

                <div class="tenders__buttons">
                    <div class="tender__buttons--three">
                        <input v-model="form.type" checked class="tender__button--one" type="radio" value="0" name="entity__radio" id="entity__radio_one">
                        <label class="tender__radio--one" for="entity__radio_one"><span>активные {{count.active}}</span></label>
                        <input v-model="form.type" class="tender__button--two" type="radio" value="2" name="entity__radio" id="entity__radio_two">
                        <label class="tender__radio--two" for="entity__radio_two"><span>завершенные {{count.complete}}</span></label>
                        <input v-model="form.type" class="tender__button--three" type="radio" value="3" name="entity__radio" id="entity__radio_three">
                        <label class="tender__radio--three" for="entity__radio_three"><span>все тендеры {{count.all}}</span></label>
                    </div>
                </div>

                <div data-app class="tenders__filter--region">
                    <p>поиск по региону</p>
                    <!-- <v-autocomplete @change="sendFilter" v-model="form.region_id" class="tenders__content--autocomplete" :items="cities"/> -->
                </div>
            </div>

            <div class="tenders__content">
                <div class="tenders__show">
                    <span class="tenders__content--span">сортировать по: </span>

                    <div class="tenders__show--date">
                        <span class="tenders__number relative" @click="openedDate = !openedDate">{{secondSortName}}</span>
                        <div class="tenders--date" v-show="openedDate">
                            <div v-for="sortItem in sortsDate" :key="sortItem.name" class="new-tenders__inner-block" @click="changeSort_by_date($event, sortItem)">
                                <div class="new-tenders__circle" :class="{ paint: selected_sort_date.name === sortItem.name }"></div>
                                <span class="new-tenders__text" for="cabinet" :class="{ orange_color: selected_sort_date.name === sortItem.name }">
                                {{sortItem.nameRU}}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="tenders__list">
                    <template  v-if="modal !== 0">
                        <div class="modal-backdrop">
                            <div class="tenders__modal">
                                <button @click="modal = 0" class="tenders__modal--close"></button>
                                <h2 class="tender__modal--title">участники тендера № {{modalInfo.id}}</h2>
                                <div class="tenders__modal--content">
                                    <div class="tenders__modal--legend">
                                        <span>наименование</span>
                                        <span>ИНН</span>
                                    </div>
                                    <div class="tenders__modal--list">
                                        <div v-for="payer in modalInfo.data" :key="payer.id">
                                            <div>
                                                <span>{{payer.company_name}}</span>
                                                <span>{{payer.inn}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div @click="modal = 0" class="modal_overlay">
                            </div>
                        </div>
                    </template>
                    <div v-for="tender in elements" :key="tender.id">
                        <div class="tenders__element">
                            <div class="tenders__element--left">
                                <span class="tenders__left--number"> № {{tender.tender_id}}</span>
                                <div class="tenders__left--description">
                                    <p>{{tender.tender_name}}</p>
                                </div>
                            </div>
                            <div class="tenders__element--mid">

                                <div class="tenders__mid--desription">
                                    <div class="tenders__mid--user">
                                        <span>организатор</span>
                                        <p>{{tender.company_name}}</p>
                                    </div>
                                    <div class="tenders__mid--data-start">
                                        <span>дата начала</span>
                                        <p>{{tender.tender_date_start}}</p>
                                    </div>
                                    <div class="tenders__mid--data-end">
                                        <span>прием заявок до:</span>
                                        <p>{{tender.tender_date_end}}</p>
                                    </div>
                                </div>
                                <div class="tenders__region">
                                    <p><span>регион поставки:</span>{{tender.region_name}}</p>
                                </div>
                            </div>
                            <div class="tenders__element--right">
                                <p v-show="tender.countPayers == null" class="tenders__right--users--none">нет участников</p>
                                <!-- <p v-show="tender.countPayers > 0" :id="tender.tender_id" @click="ModalShow" class="tenders__right--users">{{tender.countPayers}} участников</p> -->
                                <p v-show="tender.countPayers > 0" :id="tender.tender_id" @click="(event) => ModalShow(event, tender)" class="tenders__right--users">{{tender.countPayers}} участников</p>
                                <template v-if="tender.tender_status == 5">
                                    <p class="tenders__right--time">ожидание тендера</p>
                                </template>
                                <template v-if="tender.tender_status == 0">
                                    <p class="tenders__right--time">осталось<span> {{tender.time}}</span></p>
                                </template>
                                <template v-if="tender.tender_status == 4">
                                    <p class="tenders__right--time">ожидание переторжки</p>
                                </template>
                                <template v-if="tender.tender_status == 1">
                                    <p class="tenders__right--time">переторжка</p>
                                </template>
                                <template v-if="tender.tender_status == 2">
                                    <p class="tenders__right--time">подтверждение поставок</p>
                                </template>
                                <template v-if="tender.tender_status == 3">
                                    <p class="tenders__right--time">тендер завершен</p>
                                </template>
                                <router-link tag="button" :to="`/tenders/${tender.tender_id}`"  class="tenders__right--btn">участвовать </router-link>
                            </div>
                        </div>
                    </div>
                    <!-- <infinite-loading :identifier="infiniteId" @distance="1" @infinite="infiniteHandler">
                        <div class="logo_black" slot="no-more"></div>
                        <div class="logo_black" slot="no-results"></div>
                    </infinite-loading> -->
                </div>

            </div>
        </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'Search',
  data() {
    return {
      modal: 0,
      count: {
        all: null,
        active: null,
        complete: null,
      },
      form: {
          name: null,
          period_start: null,
          period_end: null,
          region_id: null,
          type: 0,
          sorting: null,
      },
      firstSortName: 'дата окончания приема заявок',
      secondSortName: 'дате завершения',
      openedPrice: false,
      openedDate: false,
      sortsAuto: [
          {name: 'default', nameRU: 'дата начала', value: "", selected: true},
          {name: 'price_asc', nameRU: 'дата завершения', value: 1, selected: false},
          {name: 'price_desc', nameRU: 'дата окончания приема заявок', value: 2, selected: false},
      ],
      sortsDate: [
          {name: 'default', nameRU: 'дате завершения', value: 1, selected: true},
          {name: 'price_asc', nameRU: 'дате публикации', value: 2, selected: false},
          {name: 'price_desc', nameRU: 'дате окончания приема заявок', value: 3, selected: false},
          {name: 'year_desc', nameRU: 'количеству участников', value: 4, selected: false},
      ],
      elements: [
        {
          company_name:"ООО",
          countPayers:1,
          region_name:"Амурская область",
          tender_date_end:"2019-12-13 14:04:00",
          tender_date_publication:"2019-12-12 08:04:00",
          tender_date_start:"2019-12-13 13:04:00",
          tender_description:"test",
          tender_full_address:"test",
          tender_id:7,
          tender_name:"tesy",
          tender_payer_id:4,
          tender_region_id:781841,
          tender_status:1,
          tender_user_id:1,
          tenderer:"[1]",
          time:"13 дней",
        },
        {
          company_name: "OOO",
          countPayers:3,
          region_name:"Санкт-Петербург",
          tender_date_end:"2019-12-10 11:55:00",
          tender_date_publication:"2019-12-10 11:40:00",
          tender_date_start:"2019-12-10 11:40:00",
          tender_description:"ТЕСТ запчасти",
          tender_full_address:"пгт Красный Бор,Промышленная 3",
          tender_id:8,
          tender_name:"рпаопро",
          tender_payer_id:7,
          tender_region_id:781903,
          tender_status:0,
          tender_user_id:1111,
          tenderer:"[8,1,6]",
          time:"16 дней",
        },
        {
          company_name:"ООО",
          countPayers:1,
          region_name:"Амурская область",
          tender_date_end:"2019-12-13 14:04:00",
          tender_date_publication:"2019-12-12 08:04:00",
          tender_date_start:"2019-12-13 13:04:00",
          tender_description:"test",
          tender_full_address:"test",
          tender_id:7,
          tender_name:"tesy",
          tender_payer_id:4,
          tender_region_id:781841,
          tender_status:1,
          tender_user_id:1,
          tenderer:"[1]",
          time:"13 дней",
        },
        {
          company_name: "OOO",
          countPayers:3,
          region_name:"Санкт-Петербург",
          tender_date_end:"2019-12-10 11:55:00",
          tender_date_publication:"2019-12-10 11:40:00",
          tender_date_start:"2019-12-10 11:40:00",
          tender_description:"ТЕСТ запчасти",
          tender_full_address:"пгт Красный Бор,Промышленная 3",
          tender_id:8,
          tender_name:"рпаопро",
          tender_payer_id:7,
          tender_region_id:781903,
          tender_status:0,
          tender_user_id:1111,
          tenderer:"[8,1,6]",
          time:"16 дней",
        },
      ],
    }
  },
  methods: {
    changeSort_by_auto (elem, sortItem) {
        if (sortItem.name == 'price_asc') {
            elem.target.parentElement.parentElement.style.right = "-46px";
        } else if (sortItem.name == 'price_desc') {
            elem.target.parentElement.parentElement.style.right = "-46px";
        } else {
            elem.target.parentElement.parentElement.style.right = "-46px";
        }
        this.sortsAuto.forEach(s => s.selected = s.name === sortItem.name)
        this.firstSortName = this.selected_sort_auto.nameRU;
        this.sort_by_auto = this.sort_auto;
        this.openedPrice = false;

    },
    changeSort_by_date (elem, sortItem) {
        if (sortItem.name == 'price_asc') {
            elem.target.parentElement.parentElement.style.right = "9px";
        } else if (sortItem.name == 'price_desc') {
            elem.target.parentElement.parentElement.style.right = "104px";
        } else if (sortItem.name == 'year_desc') {
            elem.target.parentElement.parentElement.style.right = "52px";
        } else {
            elem.target.parentElement.parentElement.style.right = "53px";
        }
        this.sortsDate.forEach(s => s.selected = s.name === sortItem.name)
        this.secondSortName = this.selected_sort_date.nameRU;
        this.sort_by_date = this.sort_date;
        this.openedDate = false;
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

.search {
  background: #EBEEF2;
  min-height: 600px;
  height: 100%;
}

</style>
