<template>
  <div class="index-wrap">
    <slide-transition :transitionName="transitionName">
      <router-view class="router-view"></router-view>
    </slide-transition>
    <v-footer ref="footer"></v-footer>
  </div>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Footer from '@/components/footer/footer'
export default {
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  components: {
    'slide-transition': SlideTransition,
    'v-footer': Footer
  },
  computed: {
    routerNameArr() {
      let routerNameArr = []
      for (let router of this.$refs.footer.$data.footerData) {
        routerNameArr.push(router.linktoRouterName)
      }

      return routerNameArr
    }
  },
  watch: {
    '$route'(to, from) {
      let [toRouterNameIndex, fromRouterNameIndex] = [0, 0]
      let [toRouterName, fromRouterName, routerNameArr] = [to.name, from.name, this.routerNameArr]

      for (let [index, item] of routerNameArr.entries()) {
        if (toRouterName === item) {
          toRouterNameIndex = index
        }
        if (fromRouterName === item) {
          fromRouterNameIndex = index
        }
      }

      this.transitionName = toRouterNameIndex > fromRouterNameIndex ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
