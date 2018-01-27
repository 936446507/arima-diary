<template>
  <div class="search-wrap">
    <search-header placeholder="搜索用户"></search-header>
    <main class="main-wrap">
      <v-scroll class="scroll-wrap">
        <div class="main">
          <ul class="user-list">
            <li class="user-item">
              <router-link :to="{name: 'user', params: {id: 1}}"
                  tag="div" class="user">
                <img alt="" :src="avatar" class="avatar">
                <span class="username">桐山零</span>
              </router-link>
              <router-link :to="{name: 'personalMessage', params: {id: 1}}"
                  tag="button" class="write-letter-btn">写信</router-link>
            </li>
          </ul>
        </div>
      </v-scroll>
    </main>
  </div>
</template>

<script>
import SearchHeader from '@/page/search/search-header'
import Scroll from '@/components/scroll/scroll'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg')
    }
  },
  components: {
    'search-header': SearchHeader,
    'v-scroll': Scroll
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.main-wrap {
  position: fixed;
  top: 1rem;
  bottom: 0;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
.user-list {
  padding: 0 .25rem;
  .user-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .25rem 0;
    .border1px(rgba(0, 0, 0, .35));
    .user {
      display: flex;
      align-items: center;
      .avatar {
        width: .75rem;
        height: .75rem;
        border-radius: 50%;
      }
      .username {padding: 0 .25rem;}
    }
    .write-letter-btn {
      padding: .075rem .15rem;
      font-size: .2rem;
      border: 1px solid @success-color;
      border-radius: .05rem;
      outline: none;
      background-color: transparent;
    }
  }
}
</style>
