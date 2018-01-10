<template>
  <div class="wrapper">
    <div class="self-wrap">
      <div class="self">
        <header class="self-header">
          <div class="avatar"><img :src="avatar" alt=""></div>
          <div class="self-info-wrap">
            <div class="self-info">
              <span class="name">有馬の日記</span><i class="icon"></i>
            </div>
            <div class="sign"></div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
