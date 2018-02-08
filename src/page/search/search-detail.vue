<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true"
        :backPrevPageStep="-(this.searchNumber + 1)">
        <div class="search-input-wrap">
          <input v-model="searchValue" type="text" class="search-input" placeholder="搜索文章、用户">
          <i @click.stop="search" class="icon icon-search"></i>
        </div>
      </v-header>
      <div class="search-detail-wrap">
        <v-scroll class="scroll-wrap">
          <div class="search-detail">
            <!-- 相关用户 -->
            <div class="relate-user-wrap">
              <router-link :to="{name: 'relateUser'}"
                tag="header" class="relate-user-header">
                <span class="title">相关用户</span>
                <i class="icon icon-arrow_right"></i>
              </router-link>
              <ul class="relate-user-list">
                <router-link :to="{name: 'user', params: {id: 1}}" tag="li"
                  v-for="n in 5" :key="n" class="relate-user-item">
                  <img alt="avatar" class="avatar" :src="avatar">
                  <span class="username">桐山零</span>
                </router-link>
              </ul>
            </div>
            <!-- 搜索到的日记 -->
            <div class="searched-diary-wrap">
              <ul class="search-diary-list">
                <diary-list-item v-for="n in 10" :key="n"></diary-list-item>
              </ul>
            </div>
          </div>
        </v-scroll>
      </div>
      <toast v-model="tipShow" width="2.5rem" 
        type="text" position="middle" text="请输入搜索内容">
      </toast>
    </div>
  </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import DiaryListItem from '@/components/diary-list-item/diary-list-item'
import {Toast} from 'vux'
import {goRouterLink} from '@/js/router'
import * as store from '@/js/store'
const storeId = 1
export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg'),
      searchValue: '',
      tipShow: false,
      // 搜索的次数
      searchNumber: 0,
      historyList: []
    }
  },
  methods: {
    // 存储搜索记录
    saveHistory(content) {
      if (!this.historyList) this.historyList = []
      this.historyList.push(content)
      store.saveToLocal(storeId, 'history', this.historyList)
    },
    // 搜索
    search() {
      let searchValue = this.searchValue
      if (searchValue) {
        this.saveHistory(searchValue)
        goRouterLink({
          name: 'searchDetail',
          query: {query: searchValue}
        }, this)
        this.searchNumber += 1
        this.searchValue = ''
      } else {
        this.tipShow = true
      }
    },
    // 设置过渡
    setTransition(transitionName) {
      console.log(transitionName)
      this.transitionName = transitionName
    }
  },
  components: {
    'slide-transition': SlideTransition,
    'v-header': Header,
    'v-scroll': Scroll,
    'diary-list-item': DiaryListItem,
    Toast
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
// 头部搜索框
.search-input-wrap {
  display: flex;
  padding: .15rem .25rem;
  border: 1px solid #ccc;
  border-radius: .25rem;
  font-size: .3rem;
  .search-input {
    flex: 1;
    padding-right: .15rem;
  }
  .icon-search {
    display: inline-block;
    padding-left: .25rem;
    font-size: .3rem;
    border-left: 1px solid rgba(0, 0, 0, .1)
  }
}
.search-detail-wrap {
  position: fixed;
  top: 1rem;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .05);
  .scroll-wrap {
    height: 100%;
  }
}

.search-detail {
  .relate-user-wrap {
    padding: 0 .25rem;
    background-color: white;
    .relate-user-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .25rem 0;
      font-size: .3rem;
      color: #999;
      .border1px(rgba(0, 0, 0, .1))
    }
    .relate-user-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .25rem 0;
      .relate-user-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .avatar {
          width: .75rem;
          height: .75rem;
          border-radius: 50%;
        }
        .username {
          padding: .15rem 0;
        }
      }
      
    }
  }
  .searched-diary-wrap {
    margin-top: .25rem;
    background-color: white;
    .search-diary-list {
      padding: 0 .25rem;
    }
  }
}
</style>

