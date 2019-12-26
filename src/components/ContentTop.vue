<template>
  <div class="content-top">
    <div class="content-top__line"></div>
    <div class="content__wrap wrap">
        <div class="bread_crumbs"></div>
        <top-banner></top-banner>
    </div>
  </div>
</template>

<script>
import topBanner from './TopBanner'

export default {
  name: 'home',
  components: {
      topBanner
  }
}
</script>

<style scoped>

.content-top {
    background-color: #EBEEF2 !important;
    height: 100%;
    color: #323232;
}

.content-top__line {
    width: 100%;
    height: 3px;
    background: #FF6C00; 
}

.bread_crumbs {
    padding: 4px 0 10px 0;
}


</style>