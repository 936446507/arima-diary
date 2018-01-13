<template>
  <div class="wrapper">
    <v-list title="我的日记">
      <ul class="list">
        <diary-list-item v-for="n in 10" :key="n"></diary-list-item>
        <li v-if="false" class="empty">还没有数据哦~</li>
      </ul>
    </v-list>
  </div>
</template>

<script>
import List from '@/components/list/list'
import DiaryListItem from '@/components/diary-list-item/diary-list-item'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      sex: 'man'
    }
  },
  components: {
    'v-list': List,
    'diary-list-item': DiaryListItem
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.list {
  padding: 0 .25rem;
  .empty {
    padding: .5rem 0;
    color: #999;
    font-size: .3rem;
    text-align: center;
  }
}
</style>
