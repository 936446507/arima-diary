<template>
  <div class="wrapper">
    <v-header class="comment-detail-header">
      <span class="desc">评论详情</span>
    </v-header>
    <div class="comment-detail-wrap">
      <v-scroll class="scroll-wrap">
        <div class="comment-detail">
          <v-comment v-for="n in 10" :key="n" class="comment-item"></v-comment>
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
    <textarea-modal ref="textareaModal"></textarea-modal>
  </div> 
</template>

<script>
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import Comment from './comment'
import footerTool from './footer-tool'
import textareaModal from './textarea-modal'
export default {
  data() {
    return {
    }
  },
  created() {
    this.$nextTick(() => {
    })
  },
  methods: {
    showTextareaModal() {
      this.$refs.textareaModal.show()
    }
  },
  components: {
    'v-header': Header,
    'v-scroll': Scroll,
    'v-comment': Comment,
    'footer-tool': footerTool,
    'textarea-modal': textareaModal
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
