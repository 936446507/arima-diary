<template>
  <div class="warpper">
    <v-header class="header-tool" arrowColor="white" :isIncreaseZIndex="true"
      background="transparent" boxShadowColor="transparent"></v-header>
    <div class="user-wrap">
      <v-scroll class="scroll-wrap" ref="scrollWrap">
        <div class="user">
          <!-- 头部视差滚动 -->
          <header class="user-header-wrap">
            <div class="user-header">
              <div class="avatar"><img :src="avatar" alt=""></div>
              <div class="info">
                <div class="name">桐山零</div>
                <div class="sex-icon" :class="sex"><i class="icon" :class="'icon-' + sex"></i></div>
              </div>
              <ul class="meta-list">
                <li class="item fllow">关注 10</li>
                <li class="item fans">粉丝 10</li>
              </ul>
              <div class="btn-wrap">
                <div class="btn edit-btn">
                  <i class="icon icon-input-edit"></i>
                  <span class="desc">编辑资料</span>
                </div>
                <div v-if="false" class="btn fllow-btn">
                  <i class="icon icon-plus"></i>
                  <span class="desc">关注</span>
                </div>
                <div v-if="false" class="btn fllow-btn">
                  <i class="icon icon-right"></i>
                  <span class="desc">已关注</span>
                </div>                
              </div>
            </div>
          </header>
          <main class="user-main-wrap">
            <touch-tab :tabItems="tabItems" :defaltIndex="0">
              <div @touchstart.stop="start($event)" @touchmove.stop="move($event)"
                @touchend.stop="end($event)" class="content">
                <v-steps></v-steps>
              </div>
              <div class="content">
                <v-diary></v-diary>
              </div>
              <div class="content">
                <v-about :aboutDatas="aboutDatas"></v-about>
              </div>
            </touch-tab>
            <tab v-if="false" :line-width=2 active-color='#ea6f5a' v-model="tabIndex">
              <tab-item class="vux-center" :selected="activeTab === item" 
                v-for="(item, index) in tabList" @click="activeTab = item" :key="index">
                {{item}}
              </tab-item>
            </tab>
            <swiper v-if="false" v-model="tabIndex" :aspect-ratio="8.7" :show-dots="false">
              <swiper-item v-for="(item, index) in tabList" :key="index">
                <div class="tab-swiper vux-center">{{item}} Container
                  <comment-list v-for="n in 15" :key="n"></comment-list>
                </div>
              </swiper-item>
            </swiper>
          </main>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import Header from '@/components/header/header'
import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
import CommmentList from '@/page/diary/comment-list'
import TouchTab from '@/components/touch-tab/touch-tab'
import Steps from '@/page/user/steps'
import diary from '@/page/user/diary'
import About from '@/page/user/about'

export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      sex: 'man',
      // tabIndex: 0,
      // tabList: ['动态', '文章', '更多'],
      // activeTab: '文章',
      tabItems: ['动态', '日记', '关于'],
      // 关于的数据
      aboutDatas: [
        {
          title: '个人信息',
          listDatas: [
            {
              subTitle: '性别',
              subContent: '男'
            },
            {
              subTitle: '年龄',
              subContent: '20'
            },
            {
              subTitle: '地区',
              subContent: '广东省广州市'
            },
            {
              subTitle: '大学',
              subContent: '别人家的大学'
            }
          ]
        },
        {
          title: '个人简介',
          listDatas: [
            {
              subTitle: '职业',
              subContent: 'web前端工程师'
            },
            {
              subTitle: '签名',
              subContent: '没有你的四月还是终究来了。'
            },
            {
              subTitle: '博客地址',
              subContent: 'http://github.com/936446507'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.watchScrollEvent()
    })
  },
  methods: {
    watchScrollEvent() {
      let scroll = this.$refs.scrollWrap.scroll
      scroll.on('scroll', (pos) => {
        console.log('pos', pos)
      })
      scroll.on('scrollEnd', (pos) => {
        console.log('end', pos)
      })
    }
  },
  components: {
    'v-scroll': Scroll,
    'v-header': Header,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    'comment-list': CommmentList,
    'touch-tab': TouchTab,
    'v-steps': Steps,
    'v-diary': diary,
    'v-about': About
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.user-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
.user {
  .user-header-wrap {
    background: url('../../assets/images/logo.jpg') center no-repeat;
    background-size: 100%;
    background-color: rgba(0, 0, 0, .5);
  }
  .user-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, .1);
    color: white;
    .avatar {
      width: 20%;
      img {
        .setImg(100%, 50%)
      }
    }
    .info {
      display: flex;
      height: .4rem;
      align-items: center;
      .sex-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: .35rem;
        height: .35rem;
        border-radius: 50%;
        text-align: center;
        line-height: .35rem;
        margin-left: .15rem;
        &.man {
          background-color: #1296db;
        }
        &.woman {
          background-color: #d4237a;
        }
      }
    }
    .meta-list {
      display: flex;
      padding: .2rem 0;
      .item {
        flex: 1;
        padding: 0 .125rem;
        &.fllow {
          .border1pxVertical(white)
        }
      }
    }
    
    .btn {
      width: 2rem;
      padding: .075rem 0;
      border: 1px solid white;
      border-radius: .25rem;
      text-align: center;
      &.edit-btn {
        .icon-input-edit::before {
          color: white;
        }
      }
    }
    
  }
  .user-main-wrap {
    background-color: rgba(0, 0, 0, 0.025);
  }
}
</style>
