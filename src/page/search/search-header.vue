<template>
  <v-header :isIncreaseZIndex="true">
    <div class="search-input-wrap">
      <input type="text" class="search-input" placeholder="搜索文章、用户">
      <i class="icon icon-search"></i>
    </div>
  </v-header>
</template>

<script>
import Header from '@/components/header/header'
export default {
  components: {
    'v-header': Header
  }
}
</script>

<style lang="less" scoped>
// 头部搜索框
.search-input-wrap {
  display: flex;
  padding: .15rem .25rem;
  border: 1px solid #ccc;
  border-radius: .25rem;
  font-size: .3rem;
  .search-input {
    flex: 1;
    padding-right: .15rem;
  }
  .icon-search {
    display: inline-block;
    padding-left: .25rem;
    font-size: .3rem;
    border-left: 1px solid rgba(0, 0, 0, .1)
  }
}
</style>

