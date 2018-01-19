<template>
  <div :style="{'backgroundColor': background, 'box-shadow': `0 0 5px ${boxShadowColor}`}" 
    :class="{'zIndex': isIncreaseZIndex}" class="header-wrap">
    <div class="header">
      <div @click.stop="backPrevPage" class="arrow">
        <i :style="{color: arrowColor}" class="icon icon-arrow_left"></i>
      </div>
      <div class="item"><slot></slot></div>
      <div class="tools-wrap"><slot name="tools"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arrowColor: {
      type: String,
      default: '#333'
    },
    background: {
      type: String,
      default: 'white'
    },
    isIncreaseZIndex: {
      type: Boolean,
      default: false
    },
    boxShadowColor: {
      type: String,
      default: '#ccc'
    }
  },
  methods: {
    backPrevPage() {
      this.$router.go(-1)
      this.$emit('setTransition', 'slide-right')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.header-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  height: 1rem;
  background-color: white;
  // z-index: 99;
  transition: all .5s linear;
  overflow: hidden;
  &.zIndex {
    z-index: 99;
  }
  .header {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 .25rem;
    .arrow {
      display: flex;
      align-items: center;
      width: 5%;
      font-size: .35rem;
    }
    .item {
      flex: 1;
      margin-left: .5rem;
      .title {
        font-size: .35rem;
        color: #333;
      }
    }
  }
}
</style>
