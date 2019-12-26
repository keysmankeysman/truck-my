<template>
<div class="layout">

    <div class="layout-header">
        <div class="header-top__wrapper">
            <div class="top-header wrap">
                <div class="top-header__logo">
                    <img class="top-header__img" src="../assets/img/logo/logo.png">
                </div>
                <div class="top-header__feedback">
                    <div class="top-header__phone">8 800 200 02 33</div>
                    <div class="top-header__email">info@trucks.ru</div>
                </div>
            </div>
        </div>
        <div class="header-bot__wrapper">
            <div class="bot-header wrap">
                <div id="nav" class="bot-header__nav">
                    <router-link class="bot-header__link" to="/">главная</router-link>
                    <router-link class="bot-header__link" to="/search">запчасти</router-link>
                    <router-link class="bot-header__link" to="/sale">техника</router-link>
                    <router-link class="bot-header__link" to="/tenders">тендеры</router-link>
                    <router-link class="bot-header__link" to="/news">новости</router-link>
                    <router-link class="bot-header__link" to="/contacts">контакты</router-link>
                </div>
                <div class="user-nav">
                    <p class="user-nav__link">войти</p>
                    <p class="user-nav__link">регистрация</p>
                </div>
            </div>
        </div>
    </div>
    <content-top v-if="$route.path != '/'"></content-top>
    <router-view></router-view>
    <footer>
        Здесь находится футер
    </footer>
</div>


</template>

<script>
import contentTop from '../components/ContentTop'

export default {


  components: {
    contentTop
  }
}
</script>

<style scoped>

.router-link-active {
    color: #FF6C00;
    font-weight: 600;
    padding: 0;
    cursor: default;
}


</style>