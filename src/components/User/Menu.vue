<template>
    <div>
        <template v-if="isAuth == false">
            <ul class="user__nav">
                <li><a @click="showModalAuth">войти</a></li>
                <li><a @click="showModalReg">регистрация</a></li>
            </ul>
        </template>
        <template v-else>

            <ul class="user__nav">
                <template v-if="this.$route.path == '/tenders'">
                    <li class="menu__add_object">
                        <router-link to="/tenders/create">+ создать тендер</router-link>
                    </li>
                </template>
                <template v-if="this.$route.path == '/sale'">
                    <li class="menu__add_object">
                        <router-link to="/sale/objects">+ добавить объявление</router-link>
                    </li>
                </template>
                <template v-else-if="this.$route.name == 'SearchMain' ||
                this.$route.name == 'ResultChoice' ||
                this.$route.name == 'Orders' ||
                this.$route.name == 'Order' ||
                this.$route.name == 'Delivery' ||
                this.$route.name == 'ResultList' ||
                this.$route.name == 'Cart'">
                    <li class="menu__cart">
                        <router-link to="/cabinet/cart"><span>{{countProducts}}</span></router-link>
                    </li>
                </template>
                <template v-if="this.$route.name == 'SaleMain' || this.$route.name == 'ObjectDetail' || this.$route.name == 'ObjectsUser' || this.$route.name == 'CabinetSale'">
                    <li class="menu__favorite">
                        <a @click="openFavorites" ref="FavoritesPopup"><span>{{countFavorites}}</span></a>
                    </li>
                </template>
                <li class="menu__msg">
                    <router-link to="/cabinet/dialogs"><span v-show="(msgCount > 0) ? true : false">{{ msgCount }}</span></router-link>
                </li>
                <li class="menu__bell">
                    <a @click="showNotifyPopup = !showNotifyPopup; showUserMenu = false;" ref="NotifyPopup"><span v-show="(ntsCount > 0) ? true : false">{{ ntsCount }}</span></a>
                </li>
                <li class="menu__users">
                    <a @click="showUserMenu = !showUserMenu; showNotifyPopup = false;" ref="UserMenu"></a>
                </li>
            </ul>

            <div class="user__window" v-if="showUserMenu" v-closable="{exclude: ['UserMenu'], handler:'hideUserMenu'}">
                <ul class="user__window--list">
                    <li><router-link to="/cabinet/orders">запчасти</router-link></li>
                    <li><router-link to="/cabinet/sale">техника</router-link></li>
                    <li><router-link to="/cabinet/tenders/my">тендеры</router-link></li>
                    <li><router-link to="/cabinet">личные данные</router-link></li>
                    <li><a @click="logout">выход</a></li>
                </ul>
            </div>
            <notify-popup v-if="showNotifyPopup"  v-closable="{exclude: ['NotifyPopup'], handler:'hideNotifyPopup'}" :nts="notifications" @NtsCU="NtsCountUpdate"></notify-popup>
        </template>
    </div>
</template>
<script>
    import NotifyPopup from '@/js/components/User/NotifyPopup'
    
    export default {
        data () {
            return {
                elements: null,
                showUserMenu: false,
                showNotifyPopup: false,
                notififcations: [],
                countProducts: 0,
                countFavorites: 0,
                ntsCount: 0,
                msgCount: 0,
            }
        },
        created() {
            if(window.auth_user != null) {
                let th = this;
                axios.post(this.$Api.Cart.getElements, {"user_id": window.auth_user.id}).then((response) => {
                    th.elements = response.data;
                    th.countProducts = _.size(th.elements);
                });
                this.getFavorites();
                this.$root.$on('changeFavoritesCount', function () {
                    th.getFavorites();
                });
                this.$root.$on('CartMenu', function (count) {
                    console.log("CARTMENU " + count);
                    th.countProducts = count;
                })
            }
        },
        mounted() {
            if(window.auth_user != null) {
                Echo.private(`notify.${this.$root.isAuth.id}`)
                    .listen('NewNotify', (e) => {
                        this.listNewNotifys();
                        this.$Audio.play();
                    });
                // LIST OF NEW NOTIFY 1
                this.listNewNotifys();
            }
        },
        methods: {
            getFavorites(test) {
                let th = this;
                axios.post(this.$Api.Sale.getFavorites, {"user_id": window.auth_user.id}).then((response) => {
                    th.countFavorites = response.data.count;
                });
            },
            NtsCountUpdate(){
                this.ntsCount -= 1;
            },
            listNewNotifys(){
                axios.post(this.$Api.Notify.index, {user_id: this.$root.isAuth.id}).then((response) => {
                    this.ntsCount = response.data.length;
                    this.notifications = response.data;
                });
            },
            openFavorites() {
                this.$root.$emit('favoriteShow');
            },
            logout() {
                this.$emit("logout");
            },
            showModalAuth(){
                this.$emit('showModalAuth');
            },
            showModalReg(){
                this.$emit('showModalReg');
            },
            hideUserMenu() {
                this.showUserMenu = false;
            },
            hideNotifyPopup() {
                this.showNotifyPopup = false;
            }
        },
        props: ['isAuth'],
        components: {
            NotifyPopup
        }
    };
</script>