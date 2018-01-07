<template>
  <div :style="{backgroundColor: background}" class="header-wrap">
    <div class="header">
      <div class="arrow"><i class="icon icon-arrow_left"></i></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/common.scss';
.header-wrap {
  @include border1px(transparent);
  position: fixed;
  top: 0;
  width: 100%;
  height: 1rem;
  background-color: white;
  z-index: 99;
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
  }
}
</style>
