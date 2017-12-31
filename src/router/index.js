import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import Home from '@/page/home/home'
import Notice from '@/page/notice/notice'
import Self from '@/page/self/self'
import User from '@/page/user/user'
import Diary from '@/page/diary/diary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'notice',
          name: 'notice',
          component: Notice
        },
        {
          path: 'self',
          name: 'self',
          component: Self
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/diary',
      name: 'diary',
      component: Diary
    }
  ]
})
