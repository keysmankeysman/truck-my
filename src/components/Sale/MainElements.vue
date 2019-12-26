<template>
    <div class="sale__list">
            <div class="sale__element" v-for="(element, index) in ElementsList" :key="element.id">
                <div class="sale__element--photo">
                    <!-- <slider :photo="element.img_name" :id="element.obj_id"></slider> -->
                    <!-- <img src="../assets/img/logo/not_foto.png"> -->
                </div>
                <div class="sale__element--description">
                    <router-link :to="`/sale/object/${element.obj_id}`" class="sale__description--top">
                        <div class="sale__left-block">
                            <span class="sale__categories">{{ element.categories_name }}</span>
                            <span v-show="customs == 1 || warranty == 1 || state == 1" class="sale__customs">
                                <i v-show="customs == 1">растаможен&nbsp;</i>
                                <i v-show="warranty == 1"> на гарантии&nbsp;</i>
                                <i v-show="state == 1"> битый или не на ходу </i>
                            </span>
                        </div>
                        <div class="sale__location">
                            <a class="sale__place" href="" v-if="element.city_name">{{ element.city_name }}</a>
                            <p class="sale__time">{{ element.time }} назад</p>
                        </div>
                    </router-link>
                    <router-link :to="`/sale/object/${element.obj_id}`" class="sale__description--middle">
                        <div class="sale__info">
                            <h2 class="sale__title">{{ element.marks }} {{ element.model }}, {{ element.year }}</h2>
                            <p class="sale__subtitle">{{ element.small_text }}</p>
                        </div>
                        <div class="sale__price">
                            <span>{{ element.price }} руб.</span>
                        </div>
                    </router-link>

                    <div class="sale__description--bottom">
                        <router-link :to="`/sale/object/${element.obj_id}`" class="sale__characteristics">
                            <span class="sale__characteristics--span" v-if="element.mileage">{{ element.mileage }} км</span>
                            <span class="sale__characteristics--span" v-if="element.engine">{{ element.engine }} куб.см</span>
                            <span class="sale__characteristics--span" v-if="element.power">{{ element.power }} л.с.</span>
                        </router-link>
                        <div class="buttons__favorite">
                            <!-- <button  v-show="ElementsList[index].favorite == 0" @click="addFavorites" :value="element.obj_id" class="favorites__add">добавить в избранное</button> -->
                            <button v-show="ElementsList[index].favorite == 0" @click="addFavorites" :value="element.obj_id" :data="index" class="favorites__add--item">добавить в избранное</button>
                            <button v-show="ElementsList[index].favorite == 1" @click="addFavorites" :value="element.obj_id" :data="index" class="favorites__del--item">убрать из избранного</button>
                        </div>
                    </div>
                </div>
            </div>
        <!-- <infinite-loading :identifier="infiniteId" @distance="1" @infinite="infiniteHandler">
            <div class="logo_black" slot="no-more"></div>
            <div class="sale__not_result" slot="no-results">Ничего не найдено</div>
        </infinite-loading> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            ElementsList: [
                {
                    PTS: null,
                    abs:0,
                    aerodeflector:0,
                    airbags:0,
                    block:0,
                    board_computer:0,
                    body:"0",
                    cabin_heater:0,
                    categor_id:17,
                    categories_id:17,
                    categories_name:"Седельные тягачи",
                    city_id:408730,
                    city_name:"Санкт-Петербург",
                    climate:null,
                    commercial:0,
                    company:"",
                    conditions:"with_mileage",
                    created_at:"2019-12-06 13:42:43",
                    cruise_control:0,
                    customs:0,
                    ebs:0,
                    engine:10600,
                    exhaust:0,
                    favorite:0,
                    favorites:null,
                    fio:"Анастасия",
                    fog_lights:0,
                    fridge:0,
                    fuel:"diesel",
                    full_load:null,
                    gps:0,
                    headlights_corrector:0,
                    heated_mirrors:0,
                    heated_seats:null,
                    id_favorite:null,
                    img_name:null,
                    img_object_id:null,
                    lifting_axle:0,
                    marks:"Scania",
                    marks_id:167,
                    mileage:1,
                    model:"R-Series",
                    model_id:626,
                    mountain_brake:"0",
                    music:null,
                    obj_id:312,
                    object_id:312,
                    object_name:626,
                    ordered:0,
                    phone:"+7 (111) 111-1111",
                    power:380,
                    power_lifts:null,
                    power_mirrors:0,
                    preheating_engine:0,
                    price:1850000,
                    publication:1,
                    region_id:781903,
                    region_name:"Санкт-Петербург",
                    small_text:"Продается седельный тягач Скания R380 \nГод выпуска...",
                    state:0,
                    steering_wheel:"left",
                    sts:null,
                    suspension:null,
                    tachograph:0,
                    text:"Продается седельный тягач Скания R380 \nГод выпуска: 2006 \nЦвет: Синий \nКолесная формула 4х2 \nДвигатель: дизельный, 380 л.с., 10,6 л. \nЭкологический класс: третий \nРазрешенная максимальная масса: 20510 кг \nМасса без нагрузки: 2 510 кг \nСтрана изготовитель: Швеция \nВ наличии 3 автомобиля!",
                    thruster_axle:0,
                    time:"20 дней",
                    transmission:"manual",
                    tv:0,
                    update_at:"2019-12-06 13:43:10",
                    user_by_id:1657,
                    user_email:"mail@mail.ru",
                    user_id:1657,
                    user_name:"",
                    user_sname:"",
                    vin:null,
                    vpts:null,
                    warranty:0,
                    wheel:"4x2",
                    year:2006,
                },
                {
                    PTS: null,
                    abs:0,
                    aerodeflector:0,
                    airbags:0,
                    block:0,
                    board_computer:0,
                    body:"0",
                    cabin_heater:0,
                    categor_id:17,
                    categories_id:17,
                    categories_name:"Седельные тягачи",
                    city_id:408730,
                    city_name:"Санкт-Петербург",
                    climate:null,
                    commercial:0,
                    company:"",
                    conditions:"with_mileage",
                    created_at:"2019-12-06 13:42:43",
                    cruise_control:0,
                    customs:0,
                    ebs:0,
                    engine:10600,
                    exhaust:0,
                    favorite:0,
                    favorites:null,
                    fio:"Анастасия",
                    fog_lights:0,
                    fridge:0,
                    fuel:"diesel",
                    full_load:null,
                    gps:0,
                    headlights_corrector:0,
                    heated_mirrors:0,
                    heated_seats:null,
                    id_favorite:null,
                    img_name:null,
                    img_object_id:null,
                    lifting_axle:0,
                    marks:"Scania",
                    marks_id:167,
                    mileage:1,
                    model:"R-Series",
                    model_id:626,
                    mountain_brake:"0",
                    music:null,
                    obj_id:312,
                    object_id:312,
                    object_name:626,
                    ordered:0,
                    phone:"+7 (111) 111-1111",
                    power:380,
                    power_lifts:null,
                    power_mirrors:0,
                    preheating_engine:0,
                    price:1850000,
                    publication:1,
                    region_id:781903,
                    region_name:"Санкт-Петербург",
                    small_text:"Продается седельный тягач Скания R380 \nГод выпуска...",
                    state:0,
                    steering_wheel:"left",
                    sts:null,
                    suspension:null,
                    tachograph:0,
                    text:"Продается седельный тягач Скания R380 \nГод выпуска: 2006 \nЦвет: Синий \nКолесная формула 4х2 \nДвигатель: дизельный, 380 л.с., 10,6 л. \nЭкологический класс: третий \nРазрешенная максимальная масса: 20510 кг \nМасса без нагрузки: 2 510 кг \nСтрана изготовитель: Швеция \nВ наличии 3 автомобиля!",
                    thruster_axle:0,
                    time:"20 дней",
                    transmission:"manual",
                    tv:0,
                    update_at:"2019-12-06 13:43:10",
                    user_by_id:1657,
                    user_email:"mail@mail.ru",
                    user_id:1657,
                    user_name:"",
                    user_sname:"",
                    vin:null,
                    vpts:null,
                    warranty:0,
                    wheel:"4x2",
                    year:2006,
                },
                {
                    PTS: null,
                    abs:0,
                    aerodeflector:0,
                    airbags:0,
                    block:0,
                    board_computer:0,
                    body:"0",
                    cabin_heater:0,
                    categor_id:17,
                    categories_id:17,
                    categories_name:"Седельные тягачи",
                    city_id:408730,
                    city_name:"Санкт-Петербург",
                    climate:null,
                    commercial:0,
                    company:"",
                    conditions:"with_mileage",
                    created_at:"2019-12-06 13:42:43",
                    cruise_control:0,
                    customs:0,
                    ebs:0,
                    engine:10600,
                    exhaust:0,
                    favorite:0,
                    favorites:null,
                    fio:"Анастасия",
                    fog_lights:0,
                    fridge:0,
                    fuel:"diesel",
                    full_load:null,
                    gps:0,
                    headlights_corrector:0,
                    heated_mirrors:0,
                    heated_seats:null,
                    id_favorite:null,
                    img_name:null,
                    img_object_id:null,
                    lifting_axle:0,
                    marks:"Scania",
                    marks_id:167,
                    mileage:1,
                    model:"R-Series",
                    model_id:626,
                    mountain_brake:"0",
                    music:null,
                    obj_id:312,
                    object_id:312,
                    object_name:626,
                    ordered:0,
                    phone:"+7 (111) 111-1111",
                    power:380,
                    power_lifts:null,
                    power_mirrors:0,
                    preheating_engine:0,
                    price:1850000,
                    publication:1,
                    region_id:781903,
                    region_name:"Санкт-Петербург",
                    small_text:"Продается седельный тягач Скания R380 \nГод выпуска...",
                    state:0,
                    steering_wheel:"left",
                    sts:null,
                    suspension:null,
                    tachograph:0,
                    text:"Продается седельный тягач Скания R380 \nГод выпуска: 2006 \nЦвет: Синий \nКолесная формула 4х2 \nДвигатель: дизельный, 380 л.с., 10,6 л. \nЭкологический класс: третий \nРазрешенная максимальная масса: 20510 кг \nМасса без нагрузки: 2 510 кг \nСтрана изготовитель: Швеция \nВ наличии 3 автомобиля!",
                    thruster_axle:0,
                    time:"20 дней",
                    transmission:"manual",
                    tv:0,
                    update_at:"2019-12-06 13:43:10",
                    user_by_id:1657,
                    user_email:"mail@mail.ru",
                    user_id:1657,
                    user_name:"",
                    user_sname:"",
                    vin:null,
                    vpts:null,
                    warranty:0,
                    wheel:"4x2",
                    year:2006,
                },
            ],
        }
    },
    props: 
    [
        'mileageObjects',
        'newObjects',
        'allObjects',
        'id_categories',
        'id_marks',
        'id_models',
        'id_region',
        'id_cities',
        'end_price',
        'start_price',
        'start_year',
        'end_year',
        'sort_by_auto',
        'sort_by_date',
        'stateValue',
        'warrantyValue',
        'customsValue',
    ]
    // props: ['mileageObjects',
    //     'newObjects',
    //     'allObjects',
    //     'id_categories',
    //     'id_marks',
    //     'id_models',
    //     'id_region',
    //     'id_cities',
    //     'end_price',
    //     'start_price',
    //     'start_year',
    //     'end_year',
    //     'sort_by_auto',
    //     'sort_by_date',
    //     'stateValue',
    //     'warrantyValue',
    //     'customsValue',
    //     'clear',
    // ]

}
</script>

<style scoped>

</style>