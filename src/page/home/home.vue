<template>
  <div class="home-wrap">
    <main-header title="首页">
      <router-link :to="{name: 'recommendAuthor'}" tag="i" class="icon icon-recommend-author"></router-link>
      <router-link :to="{name: 'search'}" tag="i" class="icon icon-search"></router-link>
    </main-header>
    <tab :line-width=2 active-color='#ea6f5a' v-model="tabIndex" class="tab">
      <tab-item class="vux-center" :selected="activeTab === item" 
        v-for="(item, index) in tabItems" @click="activeTab = item" :key="index">
        {{item}}
      </tab-item>
    </tab>
    <main class="main-wrap">
      <v-scroll ref="scrollWrap" class="scroll-wrap">
        <div class="main" ref="main">
          <v-slider class="slider">
            <div class="swipe-item" v-for="item in swipDatas" :key="item.imgUrl">
              <img :src="item.imgUrl" alt="">
            </div>
          </v-slider>
          <swiper v-model="tabIndex" :aspect-ratio="2535/375" :show-dots="false">
            <swiper-item v-for="(item, index) in tabItems" :key="index">
              <div ref="tabSwiper" class="tab-swiper vux-center">
                <diary-list-item ref="diaryItem"></diary-list-item>
              </div>
            </swiper-item>
          </swiper>
        </div>
      </v-scroll>
    </main>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import MainHeader from '@/components/main-header/main-header'
import Slider from '@/components/slider/slider'
import TouchTab from '@/components/touch-tab/touch-tab'
import DiaryListItem from '@/components/diary-list-item/diary-list-item'
import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
import {getStyle} from '@/js/style'
export default {
  data() {
    return {
      swipDatas: [
        {
          imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4068/409ea3753218bc7fa9464d450596b85c630b524a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
          imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4089/0e698e9f1e11967edbb03ee2e20eca9903f55c9e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
          imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4086/b2570bb34c848c48a17c5e369027ae76dc60691a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        }
      ],
      tabIndex: 0,
      activeTab: '前端',
      tabItems: ['前端', '后端', 'Android', 'IOS'],
      // tab的高度
      tabHeight: 0,
      scrollY: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.scrollWrap)
      let scroll = this.$refs.scrollWrap.scroll

      scroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        console.log(this.scrollY)
        console.log(getStyle({dom: this.$refs.main, attr: 'transform'}))
      })

      this.setTabH()
    })
  },
  methods: {
    setTabH(tabIndex = this.tabIndex) {
      let tabSwiper = this.$refs.tabSwiper[tabIndex]
      console.log(this.$refs.diaryItem)
      console.log(tabSwiper)
      let tabW = getStyle({dom: tabSwiper, attr: 'width', isReturnNumber: true})
      let tabH = getStyle({dom: tabSwiper, attr: 'height', isReturnNumber: true})
      let diaryItemH = getStyle({dom: this.$refs.diaryItem[0].$el, attr: 'height', isReturnNumber: true})
      console.log(tabW, tabH, diaryItemH)
    }
  },
  components: {
    'v-scroll': Scroll,
    'main-header': MainHeader,
    'v-slider': Slider,
    'touch-tab': TouchTab,
    'diary-list-item': DiaryListItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.tab {
  position: fixed;
  top: 1rem;
  width: 100%;
  height: .8rem;
  z-index: 99;
}
.main-wrap {
  position: fixed;
  top: 1.8rem;
  bottom: 1rem;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
.main {
  .content {
    padding: 0 .25rem;
  }
  .tab-swiper {
    padding: 0 .25rem;
  }
}
</style>
