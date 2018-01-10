<template>
  <div class="textarea-modal-wrap" ref="textareaModalWrap">
    <div class="textarea-modal" ref="textareaModal">
      <header class="header">
        <div @click.stop="hide" class="btn cancle-btn">取消</div>
        <div class="desc">评论</div>
        <div @click.stop="publishComment" class="btn publish-btn">发表</div>
      </header>
      <main class="textarea-wrap">
        <textarea class="comment-textarea"></textarea>
      </main>
    </div>
    <div @click.stop="hide" v-show="isTextareaModalMarkShow" class="mask"></div>
  </div>

</template>

<script>
import {getStyle} from '@/js/getStyle'
import * as EventUtil from '@/js/eventUtil'
export default {
  data() {
    return {
      isTextareaModalMarkShow: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initTextareaModal()
    })
  },
  methods: {
    // 设置dom偏移量
    setDomTranslate({dom, translateX = 0, translateY = 0}) {
      console.log(dom, translateX, translateY)
      dom.style.cssText = `transform:translate(${translateX}, ${translateY})`
    },
    initTextareaModal() {
      let textareaModal = this.$refs.textareaModal
      let textareaModalH = getStyle(textareaModal, 'height')

      this.setDomTranslate({
        dom: textareaModal,
        translateY: textareaModalH
      })
    },
    show() {
      this.isTextareaModalMarkShow = true
      this.$refs.textareaModalWrap.style.zIndex = 100
      this.$refs.textareaModal.style.transform = `translateY(0)`
      this.isTextareaModalMarkShow = true
    },
    hide() {
      let refs = this.$refs
      let textareaModalH = getStyle(refs.textareaModal, 'height')
      this.isTextareaModalMarkShow = false
      refs.textareaModal.style.transform = `translateY(${textareaModalH})`
      EventUtil.addHandler(refs.textareaModal, 'transitionend', (event) => {
        let zIndex = getStyle(refs.textareaModalWrap, 'z-index')
        console.log(zIndex)
        refs.textareaModalWrap.style.zIndex = (zIndex === -1) ? 100 : -1
      })
    },
    publishComment() {
      this.hide()
    },
    onEvent() {}
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
.textarea-modal-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  .textarea-modal {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 .25rem;
    background-color: white;
    transition: all .3s linear;
    z-index: 100;
    .header {
      @include border1px(rgba(0, 0, 0, .5));
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
    z-index: 1;
  }
}
</style>
