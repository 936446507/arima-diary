<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition">
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
        <button class="quit-account-btn">退出账号</button>
      </v-list>
    </div>
  </slide-transition>
</template>

<script>
import Header from '@/components/header/header'
import SlideTransition from '@/components/slide-transition/slide-transition'
import List from '@/components/list/list'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg'),
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
    setTransition(transitionName) {
      this.transitionName = transitionName
    }
  },
  components: {
    'v-header': Header,
    'slide-transition': SlideTransition,
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
