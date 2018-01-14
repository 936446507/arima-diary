<template>
  <div class="modal-wrap">
    <div :class="[isShowModal ? 'translateRestore' : 'translate']" class="modal">
      <div class="title">{{title}}</div>
      <div class="input-wrap">
        <input type="text" :value="prevData" @change="editInput" ref="input">
      </div>
      <div class="tool-btn">
        <button @click.stop="sureEdit" class="btn sure-btn">确定</button>
        <button @click.stop="hideModal" class="btn cancel-btn">取消</button>
      </div>
    </div>
    <div @click.stop="hideModal" :class="[isShowModal ? 'show' : 'hide']"
      class="mask"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    prevData: {
      type: String
    }
  },
  data() {
    return {
      isShowModal: false,
      // 输入框输入的数据
      editedValue: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {
    hideModal() {
      this.isShowModal = false
      this.$refs.input.blur()
    },
    showModal() {
      this.isShowModal = true
      this.$refs.input.focus()
    },
    // 编辑输入框内容 change事件
    editInput(event) {
      this.editedValue = event.target.value.trim()
      console.log(event.target.value)
    },
    // 确定修改资料
    sureEdit() {
      this.hideModal()
      // console.log(this.editedValue)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.modal {
  position: absolute;
  top: 100%;
  left: 50%;
  transition: all .35s linear;
  width: 90%;
  padding: .25rem;
  background-color: white;
  border-radius: .1rem;
  z-index: 99;
  &.translate {
    transform: translate(-50%, 0%);
    opacity: 0;
  }
  &.translateRestore {
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  .title {
    padding-bottom: .25rem;
    font-size: .35rem;
  }
  .input-wrap {
    padding: .15rem 0;
    font-size: .3rem;
    border-bottom: 1px solid @theme-color;
  }
  .tool-btn {
    display: flex;
    flex-direction: row-reverse;
    padding-top: .25rem;
    .btn {
      padding: .1rem .25rem;
      background-color: white;
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
}
</style>

