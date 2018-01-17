<template>
  <div v-show="isLoadingShow" class="loading-wrap">
    <div :style="{'width': `${size}rem`, 'height': `${size}rem`}" class="loading"></div>
    <div v-if="desc" class="desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    color: {
      type: String
    },
    desc: {
      type: String,
      default: '正在加载更多'
    }
  },
  data() {
    return {
      isLoadingShow: false
    }
  },
  methods: {
    hide() {
      this.isLoadingShow = false
    },
    show() {
      this.isLoadingShow = true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.loading-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  .loading{
    background: transparent;
    border-top: 2px solid @theme-color;
    border-right: 2px solid @theme-color;
    border-bottom: 2px solid @theme-color;
    border-left: 2px solid transparent;
    border-radius: 50%;
    transition: transform 1s linear;
    animation: rotate 1s linear infinite;
  }
  .desc {
    padding-left: .25rem;
    color: #999;
  }
}
@keyframes rotate{from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
}

</style>

