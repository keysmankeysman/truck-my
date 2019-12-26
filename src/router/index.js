import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layouts/Layout.vue'
import Index from '../components/Index.vue'

// search
import SearchMain from '../components/Search/Main.vue'

// sale
import SaleMain from '../components/Sale/Main.vue'

// tenders
import TendersMain from '../components/Tenders/Main.vue'

// news
import NewsMain from '../components/News/Main.vue'

// contancts
import ContactsMain from '../components/Contacts/Main.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [

      {
        path: '/',
        name: 'Index',
        component: Index,
      },
      {
        path: '/sale',
        name: 'SaleMain',
        component: SaleMain,
      },
      {
        path: '/search',
        name: 'SearchMain',
        component: SearchMain,
      },
      {
        path: '/tenders',
        name: 'TendersMain',
        component: TendersMain,
      },
      {
        path: '/news',
        name: 'NewsMain',
        component: NewsMain,
      },
      {
        path: '/contacts',
        name: 'ContactsMain',
        component: ContactsMain,
      },

      // {
      //   path: '/about',
      //   name: 'SearchMain',
      //   component: SearchMain,
      // },
      // {
      //   path: '/search',
      //   name: 'SearchMain',
      //   component: SearchMain,
      // },
      // {
      //   path: '/search',
      //   name: 'SearchMain',
      //   component: SearchMain,
      // },
      // {
      //   path: '/search',
      //   name: 'SearchMain',
      //   component: SearchMain,
      // }
    ]
  // {
    // path: '/about',
    // name: 'about',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // consonent: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
