<template>
    <div class="banner__top">
        <div class="banner_block">
            Сервис работает <span>в тестовом режиме</span><br>
            <div class="lower">по всем техническим трудностям обращайтесь на <span><u>development@trucks.ru</u></span></div>
        </div>
    </div>
</template>
<script>
    export default {};
</script>
<style scoped>

.banner__top {
    padding: 0 0 20px 0;
    width: 100%;
    height: 70px;
}

.banner_block {
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    background: black;
    padding-top: 7px;
    padding-bottom: 3px;
}
.banner_block  span {
    color: #FF6C00;
}
.banner_block .lower {
    text-transform: lowercase;
}
</style>