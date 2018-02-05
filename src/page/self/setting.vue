<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true">
        <h1 class="title">设置</h1>
      </v-header>
      <v-list>
        <ul class="list">
          <router-link v-for="item in settingList" :key="item.linkRouterName" 
            :to="{name: item.linkRouterName}" tag="li" class="item">
            <span class="title">{{item.title}}</span>
            <i class="icon icon-arrow_right"></i>
          </router-link>
          <li v-if="false" class="empty">还没有数据哦~</li>
        </ul>
        <button @click.stop="openQuitConfirm" class="quit-account-btn">退出账号</button>
      </v-list>
      <!-- 退出账号提示框 -->
      <div v-transfer-dom>
        <confirm v-model="quitConfirmShow" title="退出账号？"
          @on-confirm="quitAccount">
          <p style="text-align:center;">确定退出账号？</p>
        </confirm>
      </div>
    </div>
  </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import List from '@/components/list/list'
import {Confirm, TransferDomDirective as TransferDom} from 'vux'
import * as store from '@/js/store'
import {goRouterLink} from '@/js/router'

const storeId = 1
export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg'),
      quitConfirmShow: false,
      settingList: [
        {
          title: '个人资料',
          linkRouterName: 'personalData'
        },
        {
          title: '修改密码',
          linkRouterName: ''
        }
      ]
    }
  },
  methods: {
    // 打开退出账号确认框
    openQuitConfirm() {
      this.quitConfirmShow = true
    },
    // 退出账号
    quitAccount() {
      store.removeLocal(storeId, 'userInfo')
      goRouterLink({name: 'self'}, this)
    },
    // 设置过渡
    setTransition(transitionName) {
      this.transitionName = transitionName
    }
  },
  components: {
    'slide-transition': SlideTransition,
    'v-header': Header,
    'v-list': List,
    Confirm
  },
  directives: {
    TransferDom
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.wrapper {height: 100%}
.list {
  padding: 0 .25rem;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .25rem 0;
    font-size: .3rem;
    .border1px(rgba(0, 0, 0, .1));
    &:last-child {
      .border1px(transparent);
    }
    .icon-arrow_right {
      font-size: .35rem;
    }
  }
}
.quit-account-btn {
  position: fixed;
  left: 50%;
  bottom: .5rem;
  transform: translateX(-50%);
  border: 1px solid @theme-color;
  padding: .2rem .5rem;
  color: @theme-color;
  background-color: white;
  border-radius: .1rem;
}
</style>
