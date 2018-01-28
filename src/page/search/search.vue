<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true">
        <div class="search-input-wrap">
          <input v-model="searchValue" type="text" class="search-input" placeholder="搜索文章、用户">
          <i @click.stop="search" class="icon icon-search"></i>
        </div>
      </v-header>
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
      <toast v-model="tipShow" width="2.5rem" 
        type="text" position="middle" text="请输入搜索内容">
      </toast>
    </div>
  </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import {Toast} from 'vux'
import {goRouterLink} from '@/js/router'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      searchValue: '',
      tipShow: false
    }
  },
  methods: {
    // 设置过渡
    setTransition(transitionName) {
      console.log(transitionName)
      this.transitionName = transitionName
    },

    // 搜索
    search() {
      let searchValue = this.searchValue
      if (searchValue) {
        goRouterLink({
          name: 'searchDetail',
          query: {query: searchValue}
        }, this)
      } else {
        this.tipShow = true
      }
    }
  },
  components: {
    'slide-transition': SlideTransition,
    'v-header': Header,
    'v-scroll': Scroll,
    Toast
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
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

