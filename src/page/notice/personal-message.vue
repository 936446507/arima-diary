<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true">
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
                  <div class="content">
                    <img :src="bubble" alt="" class="bubble">
                    <span class="text">没有你的四月还是终究来了。</span>
                  </div>
                </div>
              </li>
              <li class="message">
                <span class="time">- 01-25: 00 -</span>
                <div class="message-main self">
                  <img :src="avatar" alt="" class="avatar">
                  <div class="content">
                    <img :src="selfBubble" alt="" class="self-bubble">
                    <span class="text">没有你的四月还是终究来了。</span>
                  </div>
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
  </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import { XTextarea, Group } from 'vux'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg'),
      bubble: require('@/assets/images/bubble.png'),
      selfBubble: require('@/assets/images/self-bubble.png')
    }
  },
  methods: {
    // 设置过渡
    setTransition(transitionName) {
      console.log(transitionName)
      this.transitionName = transitionName
    }
  },
  components: {
    'slide-transition': SlideTransition,
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
      align-items: flex-start;
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
        border: 2px solid #6e6664;
        border-radius: .1rem;
        text-align: left;
        color: #333;
        &::before {
          content: '';
          position: absolute;
          top: .2rem;
          right: 100%;
          border: 6px solid transparent;
          border-right-color: #6e6664;
        }
        .bubble {
          position: absolute;
          top: -.45rem;
          right: -.05rem;
          width: .75rem;
          height: .75rem;
        }
        .self-bubble {
          position: absolute;
          top: -0.5rem;
          left: -0.05rem;
          width: .75rem;
          height: .75rem;
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
            border-left-color: #6e6664;
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
