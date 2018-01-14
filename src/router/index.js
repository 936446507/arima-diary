import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import Home from '@/page/home/home'
import Notice from '@/page/notice/notice'
import Self from '@/page/self/self'
import User from '@/page/user/user'
import Fans from '@/page/self/fans'
import Fllow from '@/page/self/fllow'
import MyDiary from '@/page/self/my-diary'
import Setting from '@/page/self/setting'
import PersonalData from '@/page/self/personal-data'
import Diary from '@/page/diary/diary'
import CommentDetail from '@/page/diary/comment-detail'
import Login from '@/page/login/login'
import Register from '@/page/register/register'
import InputPage from '@/components/input-page/input-page'

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
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/diary/:id',
      name: 'diary',
      component: Diary
    },
    {
      path: '/comment/:id',
      name: 'commentDetail',
      component: CommentDetail
    },
    {
      path: '/fans',
      name: 'fans',
      component: Fans
    },
    {
      path: '/fllow',
      name: 'fllow',
      component: Fllow
    },
    {
      path: '/myDiary',
      name: 'myDiary',
      component: MyDiary
    },
    {
      path: '/setting',
      name: 'seting',
      component: Setting
    },
    {
      path: '/personalData',
      name: 'personalData',
      component: PersonalData
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/inputPage',
      name: 'inputPage',
      component: InputPage
    }
  ]
})
