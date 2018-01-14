<template>
  <div class="textarea-modal-wrap">
    <div :class="[isShowTextare ? 'translateRestore' : 'translate']" 
      class="textarea-modal">
      <header class="header">
        <div @click.stop="hide" class="btn cancle-btn">取消</div>
        <div class="desc">评论</div>
        <div @click.stop="publishComment" class="btn publish-btn">发表</div>
      </header>
      <main class="textarea-wrap">
        <textarea v-model="textareaValue" ref="textarea"
          class="comment-textarea"></textarea>
      </main>
    </div>
    <div @click.stop="hide" :class="[isShowTextare ? 'show' : 'hide']" 
      class="mask"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowTextare: false,
      textareaValue: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {
    show() {
      this.isShowTextare = true
      this.$refs.textarea.focus()
    },
    hide() {
      this.isShowTextare = false
      this.$refs.textarea.blur()
    },
    publishComment() {
      this.hide()
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
  .textarea-modal {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 .25rem;
    background-color: white;
    transition: all .3s linear;
    z-index: 101;
    &.translate {
      transform: translateY(100%);
    }
    &.translateRestore {
      transform: translateY(0);
    }
    .header {
      .border1px(rgba(0, 0, 0, .1));
      display: flex;
      padding: .25rem 0;
      .btn {width: 10%;}
      .desc {
        flex: 1;
        text-align: center;
      }
    }
    .textarea-wrap {
      padding: .25rem 0;
      .comment-textarea {
        width: 100%;
        height: 2rem;
        border: none;
      }
    }
  }
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 100;
    &.hide {
      display: none;
    }
    &.show {
      display: block;
    }
  }
</style>
