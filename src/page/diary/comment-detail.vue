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
      <div class="comment-input-wrap">
        <input class="comment-input" type="text" placeholder="添加一条评论吧~">
      </div>
      <button class="publish-btn">发表</button>
    </footer-tool>
  </div> 
</template>

<script>
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import Comment from './comment'
import footerTool from './footer-tool'
export default {
  data() {
    return {
    }
  },
  created() {
    this.$nextTick(() => {
    })
  },
  components: {
    'v-header': Header,
    'v-scroll': Scroll,
    'v-comment': Comment,
    'footer-tool': footerTool
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/common.scss';
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
  top: .8rem;
  width: 100%;
  bottom: 1.1rem;
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
    .comment-input {
      width: 100%;
      height: 100%;
      padding-left: .1rem;
      border-radius: .1rem;
      background-color: rgba(0, 0, 0, .1);
      color: #999;
    }
  }
  .publish-btn {
    flex: 1;
    border: none;
    color: $error-color;
    background: none;
  }
}
</style>
