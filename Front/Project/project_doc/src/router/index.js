import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ExpertDetail from '@/components/ExpertDetail'
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
