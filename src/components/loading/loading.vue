<template>
  <div v-show="isLoadingShow" class="loading-wrap">
    <div :class="[size]" class="loading">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <div v-if="desc" class="desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'default'
    },
    desc: {
      type: String,
      default: '正在加载更多'
    }
  },
  data() {
    return {
      isLoadingShow: false
    }
  },
  methods: {
    hide() {
      this.isLoadingShow = false
    },
    show() {
      this.isLoadingShow = true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.loading-wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 100;
  text-align: center;
  .loading{
    &.default {
      width: 1.5rem;
      height: .8rem;
      span {
        display: inline-block;
        width: .15rem;
        height: 100%;
        border-radius: .08rem;
        background: lightgreen;
        animation: load 1s ease infinite;
      }
    }
    &.small {
      width: 1rem;
      height: .2rem;
      span {
        display: inline-block;
        width: .08rem;
        height: 100%;
        border-radius: .08rem;
        background: lightgreen;
        animation: smallLoad 1s ease infinite;
      }
    }
  }
  .desc {
    padding: .5rem;
    font-size: .15rem;
    color: #ccc;
  }
}

@keyframes load{
  0%,100%{
    height: 40px;
    background: @success-color;
  }
  50%{
    height: 70px;
    margin: -15px 0;
    background: @theme-color;
  }
}
@keyframes smallLoad{
  0%,100%{
    height: .2rem;
    background: @success-color;
  }
  50%{
    height: .4rem;
    margin: -7px 0;
    background: @theme-color;
  }
}
.loading span.line:nth-child(2){
  animation-delay:0.2s;
}
.loading span.line:nth-child(3){
  animation-delay:0.4s;
}
.loading span.line:nth-child(4){
  animation-delay:0.6s;
}
.loading span.line:nth-child(5){
  animation-delay:0.8s;
}

</style>

