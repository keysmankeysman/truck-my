<template>
    <!-- <div class="search__history" v-if="this.$root.isAuth != null"> -->
    <div class="search__history">
        <span class="search__history--tag">вы искали:</span>
        <!-- <template v-for="item in history.slice(0, 10)">
            <a class="search__history--link" href="javascript:;" @click="ToSearch(item[0])">{{item[0]}}</a>
        </template>
        <template v-for="item in history.slice(10)">
            <a class="search__history--link" href="javascript:;" @click="ToSearch(item[0])" v-show="show">{{item[0]}}</a>
        </template>
        <a class="search__history--more" href="javascript:;" v-show="!show" @click="show = !show">показать еще</a>
        <a class="search__history--more" href="javascript:;" v-show="show" @click="show = !show">скрыть</a> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        // methods: {
        //     ToSearch(article) {
        //         this.$emit('ling');
        //         let th = this;
        //         axios.get(this.$Api.Search.line + article).then((response) => {
        //             th.$emit('get', response.data);
        //         });
        //     }
        // },
        // props:['history']
    };
</script>