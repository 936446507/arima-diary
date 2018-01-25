import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import Home from '@/page/home/home'
import RecommendAuthor from '@/page/home/recommend-author'
import Rank from '@/page/rank/rank'
import Notice from '@/page/notice/notice'
import NoticeFavorite from '@/page/notice/favorite'
import NoticeFllow from '@/page/notice/fllow'
import PersonalMesage from '@/page/notice/personal-message'
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
import Search from '@/page/search/search'
import SearchDetail from '@/page/search/search-detail'
import Editor from '@/page/editor/editor'

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
          path: '/rank',
          name: 'rank',
          component: Rank
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
      name: 'setting',
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
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/searchDetail',
      name: 'searchDetail',
      component: SearchDetail
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/recommendAuthor',
      name: 'recommendAuthor',
      component: RecommendAuthor
    },
    {
      path: '/noticeFavorite',
      name: 'noticeFavorite',
      component: NoticeFavorite
    },
    {
      path: '/noticeFllow',
      name: 'noticeFllow',
      component: NoticeFllow
    },
    {
      path: '/personalMessage/:id',
      name: 'personalMessage',
      component: PersonalMesage
    }
  ]
})
