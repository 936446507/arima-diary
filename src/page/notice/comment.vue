<template>
  <div class="comment-wrap">
    <v-header :isIncreaseZIndex="true">
      <h1 class="title">评论</h1>
    </v-header>
    <main class="main-wrap">
      <v-scroll class="scroll-wrap">
        <div class="main">
          <ul class="comment-list">
            <li class="comment">
              <header class="header">
                <router-link :to="{name: 'user', params: {id: 1}}"
                  tag="div" class="user">
                  <img src="" alt="" :src="avatar" class="avatar">
                  <span class="username">桐山零</span>
                </router-link>
                <button class="reply-btn">回复</button>
              </header>
              <main class="content">
                在文章
                <router-link :to="{name: 'diary', params: {id: 1}}" 
                  tag="span"  class="router diary-name">
                  << 有馬の日記 >>
                </router-link>
                添加了一条新评论
                <div class="comment-content">
                  <router-link :to="{name: 'user', params: {id: 1}}" 
                    tag="span"  class="router aite-name">@桐山零</router-link>
                  有馬の日記
                </div>
              </main>
              <footer class="time">01-27 00:00</footer>
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
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg')
    }
  },
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
.comment-list {
  padding: 0 .25rem;
  .comment {
    padding: .25rem 0;
    .border1px(rgba(0, 0, 0, .35));
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      .reply-btn {
        padding: .075rem .15rem;
        border: 1px solid rgba(0, 0, 0, .35);
        color: #333;
        font-size: .2rem;
        border-radius: .05rem;
        outline: none;
        background-color: transparent;
      }
    }
    .content {
      padding: .25rem 0;
      .router {color: @router-color;}
      .comment-content {
        margin-top: .25rem;
        padding: .125rem .075rem;
        border-radius: .05rem;
        background-color: rgba(0, 0, 0, .1);
      }
    }
    .time {
      color: rgba(0, 0, 0, .35);
      font-family: .15rem;
    }
  }
}
</style>
