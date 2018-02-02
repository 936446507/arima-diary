<template>
  <div class="wrapper">
    <main-header title="我的">
      <router-link :to="{name: 'search'}" tag="i" class="icon icon-search"></router-link>
    </main-header>
    <div class="self-wrap">
      <v-scroll class="scroll-wrap">
        <div class="self">
          <!-- 头部栏 -->
          <header v-if="isLogin" class="self-header-wrap">
            <div class="self-header">
              <router-link :to="{name:'user', params: {id: 1}}"
                tag="div" class="avatar">
                <img :src="avatar" alt="">
              </router-link>
              <div class="self-info-wrap">
                <div class="self-info">
                  <router-link :to="{name:'user', params: {id: 1}}"
                    tag="div" class="name">
                    有馬の日記
                  </router-link>
                  <div class="sex-icon" :class="sex"><i class="icon" :class="'icon-' + sex"></i></div>
                </div>
                <div class="sign">没有你的四月还是终究来了。</div>
              </div>
            </div>
            <ul class="header-meta-list">
              <router-link :to="{name:'fllow', params: {id: 1}}"
                tag="li" class="meta">
                <span class="title">关注</span><span class="number">666</span>
              </router-link>
              <router-link :to="{name:'fans', params: {id: 1}}"
                tag="li" class="meta">
                <span class="title">粉丝</span><span class="number">666</span>
              </router-link>
            </ul>
          </header>
          <header @click.stop="toLogin" v-if="!isLogin" class="self-header-wrap">
            <div class="no-login-header">
              <div class="default-avatar"><i class="icon icon-self"></i></div>
              <div class="desc-wrap">
                <h1 class="title">点击登录账号</h1>
                <h3 class="desc">立即记录属于你的日记</h3>
              </div>
            </div>
          </header>
          <main class="main-list-wrap">
            <ul class="list">
              <router-link :to="{name: 'editor'}" tag="li" class="item">
                <i class="icon icon-edit"></i><span>写日记</span>
              </router-link>
            </ul>
            <ul class="main-list list">
              <router-link v-for="item in mainList" :key="item.desc" 
                :to="{name: item.linkRouterName}" class="item" tag="li">
                <i :class="item.iconClass" class="icon"></i>
                <span class="desc">{{item.desc}}</span>
              </router-link>
            </ul>
            <ul class="other-list list">
              <router-link v-for="item in otherList" :key="item.desc" 
                :to="{name: item.linkRouterName}" class="item" tag="li">
                <i :class="item.iconClass" class="icon"></i>
                <span class="desc">{{item.desc}}</span>
              </router-link>
            </ul>
          </main>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/main-header/main-header'
import Scroll from '@/components/scroll/scroll'
import {goRouterLink} from '@/js/router'

export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      sex: 'man',
      mainList: [
        {
          iconClass: 'icon-diary',
          desc: '我的日记',
          linkRouterName: 'myDiary'
        },
        {
          iconClass: 'icon-favorite',
          desc: '我的喜欢',
          linkRouterName: 'myFavorite'
        }
      ],
      otherList: [
        {
          iconClass: 'icon-set',
          desc: '设置',
          linkRouterName: 'setting'
        },
        {
          iconClass: 'icon-share',
          desc: '分享',
          linkRouterName: ''
        },
        {
          iconClass: 'icon-rate',
          desc: '评分',
          linkRouterName: ''
        }
      ]
    }
  },
  methods: {
    toLogin() {
      goRouterLink({name: 'login'}, this)
    }
  },
  computed: {
    // 登录状态
    isLogin() {
      return this.$store.getters.getLoginStatus
    }
  },
  components: {
    'main-header': MainHeader,
    'v-scroll': Scroll
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.self-wrap {
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 0, .025);
  .scroll-wrap {
    height: 100%;
  }
}
.self {
  background-color: rgba(0, 0, 0, .05);
  .self-header-wrap {
    background-color: white;
    // 没有登录头部样式
    .no-login-header {
      display: flex;
      align-items: center;
      padding: .25rem;
      .default-avatar {
        width: .75rem;
        height: .75rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        text-align: center;
        line-height: .75rem;
        background-color: rgba(0, 0, 0, .1);
        .icon-self {
          font-size: .35rem;
          color: white;
        }
      }
      .desc-wrap {
        flex: 1;
        padding-left: .5rem;
        line-height: .5rem;
        .title {font-size: .35rem}
        .desc {
          font-size: .25rem;
          color: #ccc;
        }
      }
    }
  }
}
.self-header {
  display: flex;
  padding: .25rem;
  .avatar {
    width: 15%;
    img {
      .setImg(100%, 50%)
    }
  }
  .self-info-wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: .35rem;
    .self-info {
      display: flex;
      align-items: center;
      .name {
        font-size: .5rem;
      }
      .sex-icon {
        color: white
      }
    }
    .sign {
      color: #999;
    }
  }
}
.header-meta-list {
  display: flex;
  justify-content: space-around;
  padding-bottom: .25rem;
  .border1px(rgba(0, 0, 0, .35));
  .meta {
    width: 100%;
    text-align: center;
    font-size: .3rem;
    &:first-child {
      .border1pxVertical(rgba(0, 0, 0, .35)) 
    }
    .title {color: rgba(0, 0, 0, .35)}
    .number {
      padding-left: .15rem;
      color: #333;
    }
  }
}
.main-list-wrap {
  margin-bottom: .25rem;
  .list {
    margin-top: .15rem;
    background-color: white;
    .item {
      display: flex;
      align-items: center;
      &:last-child .desc {
          .border1px(transparent)
        }
      .icon {
        padding: .25rem;
        color: #4FB0C6;
        // color: #ea6f5a;
        // &.icon-diary {color: #519D9E}
        // &.icon-favorite {color: #ea6f5a}
        // &.icon-set {color: #77919d}
        // &.icon-share {}        
        // &.icon-back {}
        // &.icon-rate {color: #FFBC42}
      }
      .desc {
        flex: 1;
        padding: .25rem 0;
        color: #333;
        font-size: .3rem;
        .border1px(rgba(0, 0, 0, .35));
      }
    }
  }
}
</style>
