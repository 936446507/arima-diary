<template>
  <transition :name="transitionName">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    transitionName: {
      type: String,
      default: 'slide-left'
    }
  }
}
</script>

<style lang="less" scoped>
.router-view {  
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: all .5s cubic-bezier(.55, 0, .1, 1);  
  background-color: white;
}
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(100%, 0);  
  transform: translate(100%, 0);  
}
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-100%, 0);  
  transform: translate(-100%, 0);  
}
</style>
