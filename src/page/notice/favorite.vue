<template>
  <div class="favorite-wrap">
    <v-header :isIncreaseZIndex="true">
      <h1 class="title">喜欢和赞</h1>
    </v-header>
    <main class="main-wrap">
      <v-scroll class="scroll-wrap">
        <div class="main">
          <ul class="notice-list">
            <!-- 喜欢 -->
            <li v-for="n in 5" :key="n" class="notice-item">
              <i class="icon icon-favorite-solid"></i>
              <div class="detail">
                <div class="info">
                  <router-link :to="{name: 'user', params: {id: 1}}"
                  class="username" tag="span">
                    桐山零
                  </router-link>
                  喜欢了你的日记
                  <router-link :to="{name: 'diary', params: {id: 1}}" class="diary-name"><< 有馬の日記 >></router-link>
                </div>
                <div class="time">01-25 00:00</div>
              </div>
            </li>
            <!-- 赞 -->
            <li v-for="n in 5" :key="n" class="notice-item">
              <i class="icon icon-zan-solid"></i>
              <div class="detail">
                <div class="info">
                  <router-link :to="{name: 'user', params: {id: 1}}"
                  class="username" tag="span">
                    桐山零
                  </router-link>
                  赞了你的评论
                  <router-link :to="{name: 'commentDetail', params: {id: 1}}" tag="span" class="comment">'' 有馬の日記 ''</router-link>
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
      color: #ea6f5a;
    }
    .detail {
      flex: 1;
      padding-left: .25rem;
      line-height: .4rem;
      .info {
        font-size: .275rem;
        .username, .diary-name, .comment {color: @router-color}
      }
      .time {color: rgba(0, 0, 0, .35)}
    }
  }
}
</style>
