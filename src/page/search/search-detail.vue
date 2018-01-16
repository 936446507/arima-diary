<template>
  <div class="wrapper">
    <search-header></search-header>
    <div class="search-detail-wrap">
      <v-scroll class="scroll-wrap">
        <div class="search-detail">
          <!-- 相关用户 -->
          <div class="relate-user-wrap">
            <header class="relate-user-header">
              <span class="title">相关用户</span>
              <i class="icon icon-arrow_right"></i>
            </header>
            
            <ul class="relate-user-list">
              <li v-for="n in 5" :key="n" class="relate-user-item">
                <img alt="avatar" class="avatar" :src="avatar">
                <span class="username">桐山零</span>
              </li>
            </ul>
          </div>
          <!-- 搜索到的日记 -->
          <div class="searched-diary-wrap">
            <ul class="search-diary-list">
              <diary-list-item v-for="n in 10" :key="n"></diary-list-item>
            </ul>
          </div>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import SearchHeader from '@/page/search/search-header'
import Scroll from '@/components/scroll/scroll'
import DiaryListItem from '@/components/diary-list-item/diary-list-item'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg')
    }
  },
  components: {
    'search-header': SearchHeader,
    'v-scroll': Scroll,
    'diary-list-item': DiaryListItem
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.search-detail-wrap {
  position: fixed;
  top: 1rem;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .05);
  .scroll-wrap {
    height: 100%;
  }
}

.search-detail {
  .relate-user-wrap {
    padding: 0 .25rem;
    background-color: white;
    .relate-user-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .25rem 0;
      font-size: .3rem;
      color: #999;
      .border1px(rgba(0, 0, 0, .1))
    }
    .relate-user-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .25rem 0;
      .relate-user-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .avatar {
          width: .75rem;
          height: .75rem;
          border-radius: 50%;
        }
        .username {
          padding: .15rem 0;
        }
      }
      
    }
  }
  .searched-diary-wrap {
    margin-top: .25rem;
    background-color: white;
    .search-diary-list {
      padding: 0 .25rem;
    }
  }
}
</style>

