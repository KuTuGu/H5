import Vue from 'vue'
import Router from 'vue-router'

import all from '@/components/all.vue'
import hiring from '@/components/hiring'
import festival from '@/components/festival'
import activity from '@/components/activity'
import other from '@/components/other'

Vue.use(Router)

export default new Router({
  /*mode: 'history',*/
  routes: [
    {
      path: '/', //设置默认路由，后面不用再添加此路由
      name: 'all',
      component: all
    }, 
    {
      path: '/components/hiring',
      name: 'hiring',
      component: hiring
    },
    {
      path: '/components/festival',
      name: 'festival',
      component: festival
    },
    {
      path: '/components/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/components/other',
      name: 'other',
      component: other
    },
  ]
})
