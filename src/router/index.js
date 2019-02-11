import Vue from 'vue'
import VueRouter from 'vue-router'
import Good from '@/components/good/good.vue'
import Seller from '@/components/seller/seller.vue'
import Ratings from '@/components/ratings/ratings.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/good',
      component: Good
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/',
      redirect: '/good'
    }
  ]
})
