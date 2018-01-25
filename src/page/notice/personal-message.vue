<template>
  <div class="personal-message-wrap">
    <v-header :isIncreaseZIndex="true">
      <h1 class="username">桐山零</h1>
    </v-header>
    <main class="main-wrap">
      <v-scroll class="scroll-wrap">
        <div class="main">
          <ul class="message-list">
            <li v-for="n in 5" :key="n" class="message">
              <span class="time">- 01-25: 00 -</span>
              <div class="message-main">
                <img :src="avatar" alt="" class="avatar">
                <div class="content">没有你的四月还是终究来了。</div>
              </div>
            </li>
            <li class="message">
              <span class="time">- 01-25: 00 -</span>
              <div class="message-main self">
                <img :src="avatar" alt="" class="avatar">
                <div class="content">没有你的四月还是终究来了。</div>
              </div>
            </li>
          </ul>
        </div>
      </v-scroll>
    </main>
    <footer class="footer-wrap">
      <div class="footer">
        <div class="textarea">
          <group :gutter="0">
            <x-textarea :show-counter="false" :rows="1"
              autosize placeholder="在这里输入内容"
              >
            </x-textarea>
          </group>
        </div>
        <button class="send-btn">发送</button>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import { XTextarea, Group } from 'vux'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg')
    }
  },
  components: {
    'v-header': Header,
    'v-scroll': Scroll,
    XTextarea,
    Group
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.username {
  color: #333;
  font-size: .35rem;
}
.main-wrap {
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
.message-list {
  padding: 0 .25rem;
  .message {
    padding-top: .25rem;
    text-align: center;
    .time {
      display: inline-block;
      padding: .1rem .15rem;
      color: white;
      background-color: rgba(0, 0, 0, .1);
      border-radius: .1rem;      
    }
    .message-main {
      display: flex;
      align-items: center;
      padding: .25rem 0;
      .avatar {
        width: .75rem;
        height: .75rem;
        border-radius: 50%;
      }
      .content {
        position: relative;
        max-width: 4.5rem;
        margin-left: .25rem;
        padding: .1rem .25rem;
        border: 1px solid #333;
        border-radius: .1rem;
        text-align: left;
        color: #333;
        &::before {
          content: '';
          position: absolute;
          top: 9px;
          right: 100%;
          border: 6px solid transparent;
          border-right-color: black;
        }
      }
      &.self {
        flex-direction: row-reverse;
        .content {
          margin-left: 0;
          margin-right: .25rem;
          &::before {
            right: inherit;
            left: 100%;
            border-right-color: transparent;
            border-left-color: black;
          }
        }
      }
    }
  }
}
.footer-wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background-color: white;
  .footer {
    .border1px(rgba(0, 0, 0, .1), 0);
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .textarea {
      flex: 1;
    }
    .send-btn {
      background-color: transparent;
      color: @theme-color;
      font-size: .3rem;
      height: 100%;
      padding: 0 .25rem;
    }
  }
}
</style>
