<template>
    <div class="line__search-block">
        <input class="line__input" type="text" placeholder="введите название или еще что-то" @keyup='ChangeInput' v-model="SearchInput" ref="searchline" v-focus>
        <button class="line__btn" @click="GetModalList">найти</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                EP: {
                    Search: "",
                },
                ModalList: [],
                SearchInput: "",
            }
        },
        methods: {
            // ChangeInput(event){
            //     var val = event.key || String.fromCharCode(event.keyCode);
            //     if(this.SearchInput.length > 3) {
            //         this.GetModalList();
            //     }
            // },
            // GetModalList(){
            //     this.$emit('ling');
            //     const th = this;
            //     let userId = null;
            //     let location = null;
            //     if (window.auth_user != null) {
            //         userId = window.auth_user.id;
            //         location = window.auth_user.location;
            //     }
            //     this.SearchInput = this.SearchInput.replace("/","");
            //     axios.get(this.$Api.Search.line + this.SearchInput, {params: {id: userId, location: location}}).then((response) => {
            //         th.$emit('get', response.data);

            //     });
            // }
        },
        created() {
            let th = this;
            this.$root.$on("SearchLineFocus", function(){
                th.$refs.searchline.focus();
            });
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus();

                }
            }
        }
    }
</script>
