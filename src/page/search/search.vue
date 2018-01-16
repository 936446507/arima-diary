<template>
  <div class="wrapper">
    <search-header></search-header>
    <div class="search-wrap">
      <v-scroll class="scroll-wrap">
        <div class="search">
          <div class="hot-search-wrap">
            <header class="hot-search-header">
              <div class="title">
                <i class="icon icon-hot"></i>
                <span class="desc">热门搜索</span>
              </div>
              <button class="refresh-btn">
                <i class="icon icon-refresh"></i>
                <span class="desc">换一批</span>
              </button>
            </header>
            <ul class="hot-search-list">
              <li v-for="n in 10" :key="n" class="hot-search-item">content</li>
            </ul>
          </div>
          <div class="search-history-wrap">
            <ul class="search-history-list">
              <li v-for="n in 10" :key="n" class="search-history-item">
                <i class="icon icon-history-recode"></i>
                <span class="search-content">桐山零</span>
                <i class="icon icon-delete"></i>
              </li>
            </ul>
          </div>
          <div class="clear-history-wrap">
            <button class="clear-history-btn">清除搜索记录</button>
          </div>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import SearchHeader from '@/page/search/search-header'
import Scroll from '@/components/scroll/scroll'
export default {
  components: {
    'search-header': SearchHeader,
    'v-scroll': Scroll
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.search-wrap {
  position: fixed;
  top: 1rem;
  bottom: 0;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}

.search {
  padding: 0 .25rem;
  .hot-search-wrap {
    .hot-search-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .25rem 0;
      .title {
        .icon-hot {color: @error-color;}
        .desc {color:#333}
      }
      .refresh-btn {
        color: #ccc;
        background-color: transparent;
      }
    }
    .hot-search-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: .25rem;
      .border1px(rgba(0, 0, 0, .1));
      .hot-search-item {
        margin: .15rem 0;
        padding: .15rem .3rem;
        color: #999;
        border: 1px solid #999;
        border-radius: .1rem;
      }
    }
  }
  .search-history-wrap {
    .search-history-list {
      .search-history-item {
        display: flex;
        align-items: center;
        padding: .25rem 0;
        font-size: .3rem;
        .border1px(rgba(0, 0, 0, .1));
        .search-content {
          flex: 1;
          padding: 0 .25rem;
          .text-ellipsis;
        }
        .icon.delete {
          padding: 0 .15rem;
        }
      }
    }
  }
  .clear-history-wrap {
    padding: .25rem 0;
    display: flex;
    justify-content: center;
    .clear-history-btn {
      padding: .15rem .5rem;
      border-radius: .15rem;
      border: 1px solid #999;
      background-color: white;
      color: #999;
    }
  }
}

</style>

