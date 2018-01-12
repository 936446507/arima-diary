<template>
  <div class="wrapper">
    <v-header>
      <h1 class="title">{{title}}</h1>
    </v-header>
    <div class="list-wrap">
      <v-scroll class="scroll-wrap">
        <slot></slot>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
export default {
  props: {
    title: String,
    default: ''
  },
  components: {
    'v-header': Header,
    'v-scoll': Scroll
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: .35rem;
  colo: #333;
}
</style>
