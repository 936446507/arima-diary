<template>
  <div class="home-wrap">
    <main-header title="首页">
      <router-link :to="{name: 'recommendAuthor'}" tag="i" class="icon icon-recommend-author"></router-link>
      <router-link :to="{name: 'search'}" tag="i" class="icon icon-search"></router-link>
    </main-header>
    <main class="main-wrap">
      <v-scroll ref="scrollWrap" class="scroll-wrap">
        <div class="main" ref="main">
          <v-slider class="slider">
            <div class="swipe-item" v-for="item in swipDatas" :key="item.imgUrl">
              <img :src="item.imgUrl" alt="">
            </div>
          </v-slider>
          <touch-tab :tabItems="tabItems">
            <div class="content"></div>
            <div class="content">
              <diary-list-item v-for="n in 10" :key="n"></diary-list-item>
            </div>
            <div class="content"></div>
            <div class="content"></div>
          </touch-tab>
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
      tabItems: ['前端', '后端', 'Android', 'IOS'],
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
    })
  },
  components: {
    'v-scroll': Scroll,
    'main-header': MainHeader,
    'v-slider': Slider,
    'touch-tab': TouchTab,
    'diary-list-item': DiaryListItem
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.main-wrap {
  position: fixed;
  top: 1rem;
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
}
</style>
