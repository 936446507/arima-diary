<template>
  <div class="diary-wrap">
    <div class="diary">
      <header class="header">
        <div class="info">日记 666</div>
      </header>
      <ul class="diary-list">
        <diary-list-item v-for="n in 2" :key="n"></diary-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import DiaryListItem from '@/components/diary-list-item/diary-list-item'
export default {
  components: {
    'diary-list-item': DiaryListItem
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.diary {
  .header {
    display: flex;
    justify-content: space-between;
    padding: .25rem;
    background-color: white;
    color: @theme-color;
  }
  .diary-list {
    margin-top: .25rem;
    padding: 0 .25rem;
    background-color: white;
    color: @theme-color;
  }
}
</style>

