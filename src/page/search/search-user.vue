<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true">
        <div class="search-input-wrap">
          <input type="text" class="search-input" placeholder="搜索用户">
          <i class="icon icon-search"></i>
        </div>
      </v-header>
      <main class="main-wrap">
        <v-scroll class="scroll-wrap">
          <div class="main">
            <ul class="user-list">
              <li class="user-item">
                <router-link :to="{name: 'user', params: {id: 1}}"
                    tag="div" class="user">
                  <img alt="" :src="avatar" class="avatar">
                  <span class="username">桐山零</span>
                </router-link>
                <router-link :to="{name: 'personalMessage', params: {id: 1}}"
                    tag="button" class="write-letter-btn">写信</router-link>
              </li>
            </ul>
          </div>
        </v-scroll>
      </main>
    </div>
  </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg')
    }
  },
  methods: {
    // 设置过渡
    setTransition(transitionName) {
      console.log(transitionName)
      this.transitionName = transitionName
    }
  },
  components: {
    'slide-transition': SlideTransition,
    'v-header': Header,
    'v-scroll': Scroll
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
.main-wrap {
  position: fixed;
  top: 1rem;
  bottom: 0;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
.user-list {
  padding: 0 .25rem;
  .user-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .25rem 0;
    .border1px(rgba(0, 0, 0, .35));
    .user {
      display: flex;
      align-items: center;
      .avatar {
        width: .75rem;
        height: .75rem;
        border-radius: 50%;
      }
      .username {padding: 0 .25rem;}
    }
    .write-letter-btn {
      padding: .075rem .15rem;
      font-size: .2rem;
      border: 1px solid @success-color;
      border-radius: .05rem;
      outline: none;
      background-color: transparent;
    }
  }
}
</style>
