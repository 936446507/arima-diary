<template>
  <div :style="{backgroundColor: background}" 
    :class="{'zIndex': isIncreaseZIndex}" class="header-wrap">
    <div class="header">
      <div @click.stop="backPrevPage" class="arrow">
        <i :style="{color: arrowColor}" class="icon icon-arrow_left"></i>
      </div>
      <div class="item"> <slot></slot></div>
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
    }
  },
  methods: {
    backPrevPage() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
.header-wrap {
  @include border1px(rgba(0, 0, 0, .35));
  position: fixed;
  top: 0;
  width: 100%;
  height: 1rem;
  background-color: white;
  // z-index: 99;
  transition: all .5s linear;
  overflow: hidden;
  box-shadow: 0 0 5px #ccc;
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
      margin-left: .5rem;
    }
  }
}
</style>
