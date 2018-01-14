<template>
  <div class="input-wrap">
    <v-header>
      <h1 class="title">{{title}}</h1>
      <button class="finisth-btn" slot="tool-btn">完成</button>
    </v-header>
    <div class="input-detail">
      <input type="text" placeholder="placeholder">
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
export default {
  props: {
    title: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.input-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  .finisth-btn {
    padding: .1rem .25rem;
    background-color: white;
  }
  .input-detail {
    position: relative;
    top: 1rem;
    width: 100%;
    padding: .25rem;
    .border1px(rgba(0, 0, 0, .1));
    input {
      width: 100%;
      height: .35rem;
      font-size: .3rem;
    }
  }
}
</style>

