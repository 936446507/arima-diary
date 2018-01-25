<template>
  <div class="fllow-wrap">
    <v-header :isIncreaseZIndex="true">
      <h1 class="title">关注</h1>
    </v-header>
    <main class="main-wrap">
      <v-scroll class="scroll-wrap">
        <div class="main">
          <ul class="notice-list">
            <li v-for="n in 10" :key="n" class="notice-item">
              <i class="icon icon-checkmark"></i>
              <div class="detail">
                <div class="info">
                  <router-link :to="{name: 'user', params: {id: 1}}"
                  class="username" tag="span">
                    桐山零
                  </router-link>
                  关注了你
                </div>
                <div class="time">01-25 00:00</div>
              </div>
            </li>
          </ul>
        </div>
      </v-scroll>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
export default {
  components: {
    'v-header': Header,
    'v-scroll': Scroll
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.title {
  color: #333;
  font-size: .35rem;
}
.main-wrap {
  position: fixed;
  top: 1rem;
  bottom: 0;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
.notice-list {
  padding: 0 .25rem;
  .notice-item {
    display: flex;
    padding: .25rem 0;
    .icon {
      font-size: .45rem;
      color: @theme-color;
    }
    .detail {
      flex: 1;
      padding-left: .25rem;
      line-height: .4rem;
      .info {
        font-size: .275rem;
        .username {color: @router-color}
      }
      .time {color: rgba(0, 0, 0, .35)}
    }
  }
}
</style>
