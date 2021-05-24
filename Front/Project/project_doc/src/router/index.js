import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layouts/Home.vue'
import ExpertDetail from '@/layouts/ExpertDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/expertDetail',
      name: 'expertDetail',
      component: ExpertDetail
    }
  ]
})
