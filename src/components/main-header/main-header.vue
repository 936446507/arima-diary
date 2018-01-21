<template>
  <header class="main-header-wrap">
    <div class="header">
      <h1 class="title">{{title}}</h1>
      <div class="tool-icon-wrap">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  // 主导航下的header
  name: 'main-header',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.main-header-wrap {
  .border1px(rgba(0, 0, 0, .1));
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  z-index: 99;
  background-color: white;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .25rem;
    height: 100%;
    .title {
      flex: 1;
      font-size: .35rem;
    }
    .tool-icon-wrap {
      display: flex;
      align-items: center;
      .icon {
        padding: 0 .15rem;
        &.icon-recommend-author {
          font-size: .45rem;
        }
        &.icon-search {
          font-size: .35rem;
        }
      }
    }
  }
}
</style>
