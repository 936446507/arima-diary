<template>
  <!-- 评论文本域模态框 -->
  <popup v-model="textareaShow" height="40%">
    <div class="comment-textarea-popup">
      <header class="header">
        <div @click.stop="hideTextareaModal" class="comment-btn cancle-btn">取消</div>
        <div class="desc">评论</div>
        <div @click.stop="publishComment" class="comment-btn publish-btn">发表</div>
      </header>
      <XTextarea v-model="textareaValue" style="background: white"
        :height="175" :rows="6" :cols="30">
      </XTextarea>
    </div>
  </popup>
</template>

<script>
import {Popup, XTextarea} from 'vux'
export default {
  props: {
    isApplyComment: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 评论文本域模态框状态
      textareaShow: false,
      textareaValue: ''
    }
  },
  methods: {
    // 显示隐藏评论文本域
    showTextareaModal() {
      this.textareaShow = true
    },
    hideTextareaModal() {
      this.textareaShow = false
    },
    // 发表评论
    publishComment() {
      this.hideTextareaModal()
    },
    // 回复主评论
    applyComment() {},
    // 回复子评论
    applySubComment() {}
  },
  components: {
    Popup,
    XTextarea
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
// 评论文本域模态框
.comment-textarea-popup {
  padding: 0 .25rem;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>div {padding: .25rem 0;}
  }
}
</style>
