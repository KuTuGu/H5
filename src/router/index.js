import Vue from 'vue'
import Router from 'vue-router'


import sort from '../components/sort'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'all',
      component: sort.all
    },
    {
      path: '/components/hiring',
      name: 'hiring',
      component: sort.hiring
    },
    {
      path: '/components/festival',
      name: 'festival',
      component: sort.festival
    },
    {
      path: '/components/activity',
      name: 'activity',
      component: sort.activity
    },
    {
      path: '/components/other',
      name: 'other',
      component: sort.other
    },
  ]
})
