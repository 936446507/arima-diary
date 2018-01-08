<template>
  <!-- 底部固定工具条 -->
  <footer class="footer-tool-wrap">
    <div class="footer-tool">
      <slot></slot>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
// 底部固定工具条
.footer-tool-wrap {
  @include border1px(rgba(0, 0, 0, .35), 0);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background-color: white;
  .footer-tool {
    display: flex;
    height: 100%;
    padding: .125rem .25rem;
  }
}
</style>
