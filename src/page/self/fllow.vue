<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true">
        <h1 class="title">{{headerTitle}}</h1>
      </v-header>
      <v-list>
        <ul class="list">
          <li v-for="n in 10" :key="n" class="item">
            <router-link :to="{name:'user', params: {id: 1}}"
              tag="div" class="avatar">
              <img :src="avatar" alt="avatar">
            </router-link>
            <div class="info">
              <div class="base">
                <router-link :to="{name:'user', params: {id: 1}}"
                tag="span" class="name">
                  有馬の日記
                </router-link>
                <span :class="sex" class="sex-icon">
                  <i :class="`icon-${sex}`" class="icon"></i>
                </span>
              </div>
              <div class="job">前端工程师</div>
            </div>
            <!-- 关注按钮 -->
            <div @click.stop="fllowUser" class="tool-wrap">
              <button v-show="!isHadFllowed" class="btn fllow-btn">
                <i class="icon icon-plus"></i><span class="desc">关注</span>
              </button>
              <button v-show="isHadFllowed" class="btn fllowed-btn">
                <i class="icon icon-right"></i><span class="desc">已关注</span>
              </button>
            </div>
          </li>
          <li v-if="false" class="empty">还没有数据哦~</li>
        </ul>
      </v-list>
    </div>
  </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import List from '@/components/list/list'
import {goRouterLink, getRouterInfo} from '@/js/router'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg'),
      sex: 'man'
    }
  },
  methods: {
    fllowUser() {
      if (!this.isLogin) {
        goRouterLink({name: 'login'}, this)
      } else {
        this.isHadFllowed = !this.isHadFllowed
      }
    },
    // 设置过渡
    setTransition(transitionName) {
      this.transitionName = transitionName
    }
  },
  computed: {
    headerTitle() {
      let routerInfo = getRouterInfo(this)
      return routerInfo.name === 'fllow' ? '关注' : '粉丝'
    },
    isLogin() {
      return this.$store.getters.getLoginStatus
    },
    isHadFllowed() {
      let routerInfo = getRouterInfo(this)
      return routerInfo.name === 'fllow'
    }
  },
  components: {
    'slide-transition': SlideTransition,
    'v-header': Header,
    'v-list': List
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.list {
  padding: 0 .25rem;
  .item {
    display: flex;
    align-items: center;
    padding: .25rem 0;
    .border1px(rgba(0, 0, 0, .1));
    &:last-child {
      .border1px(transparent)
    }
    .avatar {
      width: 15%;
      img {
        .setImg(100%, 50%);
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      box-sizing: border-box;
      padding-left: .25rem;
      .base {
        display: flex;
        align-items: center;
        .name {
          font-size: .35rem;
        }
      }
      .job {color: #ccc}
    }
    // 关注 已关注按钮
    .btn {
      width: 1.5rem;
      height: .6rem;
      border: none;
      border-radius: .25rem;
      font-size: .25rem;
      &.fllow-btn {
        color: white;
        background-color: @success-color;
      }
      &.fllowed-btn {
        color: #ccc;
        border: 1px solid #ccc;
        background-color: white;
      }
    }
  }
  .empty {
    padding: .5rem 0;
    color: #999;
    font-size: .3rem;
    text-align: center;
  }
}
</style>

