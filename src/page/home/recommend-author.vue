<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true">
        <h1 class="title">推荐作者</h1>
      </v-header>
      <main class="main-wrap">
        <v-scroll class="scroll-wrap">
          <ul class="user-list">
            <li v-for="n in 10" :key="n" class="user-item">
              <router-link :to="{name: 'user', params: {id: 1}}"  
                tag="div" class="avatar"><img :src="avatar">
              </router-link>
              <div class="detail">
                <header class="header">
                  <router-link :to="{name: 'user', params: {id: 1}}"
                    tag="span" class="username">桐山零</router-link>
                  <div @click.stop="fllowUser" class="tool-wrap">
                    <button v-show="!isHadFllowed" class="btn fllow-btn">
                      <i class="icon icon-plus"></i><span class="desc">关注</span>
                    </button>
                    <button v-show="isHadFllowed" class="btn fllowed-btn">
                      <i class="icon icon-right"></i><span class="desc">已关注</span>
                    </button>
                  </div>
                </header>
                <div class="sign">没有你的四月还是终究来了。</div>
                <ul class="recomment-diary-list">
                  <li v-for="n in 2" :key="n" class="recomment-diary-item">
                    <i class="icon icon-diary"></i>
                    <router-link :to="{name: 'diary', params: {id: 1}}"
                      tag="span" class="diary-name">有馬の日記</router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </v-scroll>
      </main>
    </div>
  </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import {goRouterLink} from '@/js/router'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg'),
      isHadFllowed: false
    }
  },
  methods: {
    // 关注作者
    fllowUser() {
      if (!this.isLogin) {
        goRouterLink({name: 'login'}, this)
      } else {
        this.isHadFllowed = !this.isHadFllowed
      }
    },
    // 设置过渡
    setTransition(transitionName) {
      console.log(transitionName)
      this.transitionName = transitionName
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.getLoginStatus
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
.title {
  font-size: .35rem;
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
  // .border1px(rgba(0, 0, 0, .1));
  .user-item {
    display: flex;
    align-items: flex-start;
    padding: .25rem 0;
    .border1px(rgba(0, 0, 0, .1));
    .avatar {
      width: .75rem;
      height: .75rem;
      img {
        .setImg(100%, 50%);
      }
    }
    .detail {
      flex: 1;
      padding-left: .25rem;
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .35rem;
        height: .75rem;
        .btn {
          width: 2rem;
          height: .6rem;
          border: none;
          border-radius: .25rem;
          font-size: .25rem;
          padding: 0 .25rem;
          box-sizing: border-box;
          &.fllow-btn {
            background-color: @success-color;
            color: white;
          }
          &.fllowed-btn {
            color: #ccc;
            border: 1px solid #ccc;
            background-color: white;
          }
        }
      }
      .sign {
        padding: .25rem 0;
        font-size: .25rem;
        .border1px(rgba(0, 0, 0, .1));
      }
      .recomment-diary-item {
        display: flex;
        align-items: center;
        padding-top: .25rem;
        .icon {color: @theme-color}
        .diary-name {
          flex: 1;
          padding-left: .25rem;
          .text-ellipsis
        }
      }
    }
  }
}
</style>
