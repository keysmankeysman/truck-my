<template>
  <div class="search">

    <section class="main-content">
        <div class="main-wrap wrap">
            <div class="main-info">
                <div class="main-title">
                    <h1 class="main-title__caption">trucks<span class="main-title__span">.ru</span></h1>

                </div>
                <div class="main-subtitle">
                    <p class="main-subtitle__text">Единый портал для собственников транспортного бизнеса</p>
                </div>
            </div>
        </div>

        <div class="main__links">
            <div class="main__links--element">
            </div>
            <div class="main__links--element">
                <router-link @mouseover.native="addImage($event, 'techicks')" to="/sale" class="links__element">
                    <div  class="links__info">
                        <h2 id="techniks" class="links__title">техника</h2>
                        <p class="links__subtitle">перейти</p>
                    </div>
                </router-link>
                <router-link @mouseover.native="addImage($event, 'parts')"  to="/search" class="links__element" id="details">
                    <div  class="links__info">
                        <h2 class="links__title">запчасти</h2>
                        <p class="links__subtitle">перейти</p>
                    </div>
                </router-link>
                 <router-link @mouseover.native="addImage($event, 'tenders')" to="/tenders" id="tenders" class="links__element" href="">
                    <div class="links__info">
                        <h2 class="links__title">тендеры</h2>
                        <p class="links__subtitle">перейти</p>
                    </div>
                </router-link>
            </div>
            <div class="main__links--element">
            </div>
        </div>
    </section>
  </div>
</template>

<script>


export default {
    data: function() {
        return {
            city: [],
            region: []
        }
    },
    methods: {
        addImage (event, type) {
            if (type == 'tenders') {
                document.getElementById('background').classList.remove('details__active')
                document.getElementById('background').classList.remove('techniks__active')
                document.getElementById('background').classList.add('tenders__active')
            } else if (type == 'parts') {
                document.getElementById('background').classList.remove('tenders__active')
                document.getElementById('background').classList.remove('techniks__active')
                document.getElementById('background').classList.add('details__active')
            } else {
                document.getElementById('background').classList.remove('tenders__active')
                document.getElementById('background').classList.remove('details__active')
                document.getElementById('background').classList.add('techniks__active')
            }
        },
        delImage (event, type) {
            if (type == 'tenders') {
                //  document.getElementById('background').classList.remove('tenders__active')
            } else if (type == 'parts') {
                //  document.getElementById('background').classList.remove('details__active')
            }
        }
    }
};


</script>

<style scoped>

</style>
