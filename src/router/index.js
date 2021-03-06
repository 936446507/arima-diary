import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index/index'
import Home from '@/page/home/home'
import RecommendAuthor from '@/page/home/recommend-author'
import Rank from '@/page/rank/rank'
import Notice from '@/page/notice/notice'
import NoticeComment from '@/page/notice/comment'
import NoticeFavorite from '@/page/notice/favorite'
import NoticeFllow from '@/page/notice/fllow'
import PersonalMesage from '@/page/notice/personal-message'
import Self from '@/page/self/self'
import User from '@/page/user/user'
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
import SearchUser from '@/page/search/search-user'
import Editor from '@/page/editor/editor'
import TouchSlide from '@/components/touch-slide/touch-slide'

import * as store from '@/js/store'

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
      path: '/touchSlide',
      name: 'touchSlide',
      component: TouchSlide
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
      path: '/fans/:id',
      name: 'fans',
      component: Fllow
    },
    {
      path: '/fllow/:id',
      name: 'fllow',
      component: Fllow
    },
    {
      path: '/myDiary',
      name: 'myDiary',
      component: MyDiary,
      meta: { requireLogin: true }
    },
    {
      path: '/myFavorite',
      name: 'myFavorite',
      component: MyDiary,
      meta: { requireLogin: true }
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      meta: { requireLogin: true }
    },
    {
      path: '/personalData',
      name: 'personalData',
      component: PersonalData,
      meta: { requireLogin: true }
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
      path: '/relateUser',
      name: 'relateUser',
      component: Fllow
    },
    {
      path: '/searchUser',
      name: 'searchUser',
      component: SearchUser,
      meta: { requireLogin: true }
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
      meta: { requireLogin: true }
    },
    {
      path: '/recommendAuthor',
      name: 'recommendAuthor',
      component: RecommendAuthor
    },
    {
      path: '/noticeComment',
      name: 'noticeComment',
      component: NoticeComment,
      meta: { requireLogin: true }
    },
    {
      path: '/noticeFavorite',
      name: 'noticeFavorite',
      component: NoticeFavorite,
      meta: { requireLogin: true }
    },
    {
      path: '/noticeFllow',
      name: 'noticeFllow',
      component: NoticeFllow,
      meta: { requireLogin: true }
    },
    {
      path: '/personalMessage/:id',
      name: 'personalMessage',
      component: PersonalMesage,
      meta: { requireLogin: true }
    }
  ]
})
