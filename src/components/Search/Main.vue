<template>
  <div class="search">
    <div class="search__brand wrap">
      <search-line></search-line>
      <search-history></search-history>
    </div>
  </div>
</template>

<script>
import SearchLine from '../Search/Line'
import SearchHistory from '../Search/History'

export default {
  name: 'Search',
  components: {
    SearchLine,
    SearchHistory,
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
