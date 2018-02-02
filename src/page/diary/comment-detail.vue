<template>
   <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true"
        class="comment-detail-header">
      <span class="desc">评论详情</span>
      </v-header>
      <div class="comment-detail-wrap">
        <v-scroll class="scroll-wrap">
          <div class="comment-detail">
            <v-comment :commentItem="commentItem" class="comment-item"></v-comment>
          </div>
        </v-scroll>
      </div>
      <footer-tool class="footer-tool-wrap">
        <div @click.stop="showTextareaModal" class="comment-input-wrap">
          添加一条评论吧~
        </div>
        <button class="publish-btn">发表</button>
      </footer-tool>
      <!-- 评论文本域模态框状态 -->
    </div>
   </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import Comment from './comment'
import footerTool from './footer-tool'
import {Group, XTextarea} from 'vux'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      commentValue: '',
      commentItem: {
        commentId: 1,
        avatar: require('@/assets/images/logo.jpg'),
        userId: 1,
        username: '有馬の日记',
        time: '2018-01-01 00:00',
        zan: 999,
        content: '有馬の日记',
        subComment: [
          {
            respondentId: 1,
            respondent: '桐山零',
            aiteId: 2,
            aiteName: '有馬の日记',
            content: '有馬の日记'
          },
          {
            respondentId: 2,
            respondent: '桐山零',
            aiteId: 2,
            aiteName: '有馬の日记',
            content: '有馬の日记'
          },
          {
            respondentId: 3,
            respondent: '桐山零',
            aiteId: 2,
            aiteName: '有馬の日记',
            content: '有馬の日记'
          },
          {
            respondentId: 4,
            respondent: '桐山零',
            aiteId: 2,
            aiteName: '有馬の日记',
            content: '有馬の日记'
          }
        ]
      }
    }
  },
  created() {
    this.$nextTick(() => {
    })
  },
  methods: {
    showTextareaModal() {
      this.$refs.textareaModal.show()
    },

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
    'v-comment': Comment,
    'footer-tool': footerTool,
    Group,
    XTextarea
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
.comment-detail-header {
  .desc {
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: .25rem;
  }
}
.comment-detail-wrap {
  position: fixed;
  top: 1rem;
  width: 100%;
  bottom: 1rem;
  .scroll-wrap {
    height: 100%;
  }
  .comment-item {
    &::before {
      height: 0;
    }
  }
}
.footer-tool-wrap {
  .comment-input-wrap {
    display: flex;
    flex-basis: 5rem;
    align-items: center;
    padding-left: .25rem;
    border: .005rem solid rgba(0, 0, 0, .35);
    border-radius: .1rem;
    background-color: rgba(0, 0, 0, .1);
    color:#999;
    /*
    .comment-input {
      width: 100%;
      height: 100%;
      padding-left: .1rem;
      border-radius: .1rem;
      background-color: rgba(0, 0, 0, .1);
      color: #999;
    }
    */
  }
  .publish-btn {
    flex: 1;
    border: none;
    color: $error-color;
    background: none;
  }
}
</style>
