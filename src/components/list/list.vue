<template>
  <div class="list-wrapper">
    <div class="list-wrap">
      <v-scroll class="scroll-wrap">
        <slot></slot>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
export default {
  props: {
    title: String,
    default: ''
  },
  components: {
    'v-scroll': Scroll
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: .35rem;
  color: #333;
}
.list-wrap {
  position: fixed;
  top: 1rem;
  bottom: 0;
  width: 100%;
  background-color: white;
  .scroll-wrap {
    height: 100%;
  }
}
</style>
