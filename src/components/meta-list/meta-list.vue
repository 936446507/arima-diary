<template>
  <ul class="meta-list">
      <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    metaLen: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
.meta-list {
  display: flex;
  align-items: baseline;
  font-size: .25rem;
  color: $default-color;
  .meta::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: .05rem;
    height: .05rem;
    background-color: $default-color;
    margin: 0 .05rem;
    border-radius: 50%;
  }
  .meta:last-child::after {
    content: '';
    width: 0;
    height: 0;
  }
}
</style>
