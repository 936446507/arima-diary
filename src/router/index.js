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

const storeId = 1
// 获取登录状态
function getLoginStatus() {
  let userInfo = store.loadFromLocal(storeId, 'userInfo')
  let isLogin = userInfo ? userInfo.loginStatus : false
  return isLogin
}

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
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/myFavorite',
      name: 'myFavorite',
      component: MyDiary,
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/personalData',
      name: 'personalData',
      component: PersonalData,
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
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
      path: '/searchUser',
      name: 'searchUser',
      component: SearchUser,
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
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
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/noticeFavorite',
      name: 'noticeFavorite',
      component: NoticeFavorite,
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/noticeFllow',
      name: 'noticeFllow',
      component: NoticeFllow,
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/personalMessage/:id',
      name: 'personalMessage',
      component: PersonalMesage,
      beforeEnter: (to, from, next) => {
        let isLogin = getLoginStatus()
        if (!isLogin) {
          next({name: 'login'})
        } else {
          next()
        }
      }
    }
  ]
})
