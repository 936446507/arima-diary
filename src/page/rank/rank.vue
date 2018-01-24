<template>
  <div class="rank-wrap">
    <main-header title="榜单"></main-header>
    
          <touch-tab :tabItems="tabItems" :defaultIndex="0">
            <div class="content">
              <diary-list-item v-for="n in 10" :key="n"></diary-list-item>
            </div>
            <div class="content"></div>
            <div class="content"></div>
          </touch-tab>

  </div>
</template>

<script>
import MainHeader from '@/components/main-header/main-header'
import TouchTab from '@/components/touch-tab/touch-tab'
import DiaryListItem from '@/components/diary-list-item/diary-list-item'
export default {
  data() {
    return {
      tabItems: ['新上榜', '7日热门', '30日热门']
    }
  },
  components: {
    'main-header': MainHeader,
    'touch-tab': TouchTab,
    'diary-list-item': DiaryListItem
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.main-wrap {
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
.content {
  padding: 0 .25rem;
}
</style>
