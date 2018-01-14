<template>
  <v-list title="设置">
    <ul class="list">
      <li class="item">
        <span class="title">个人资料</span>
        <!-- <span class="prev-data"></span> -->
        <i class="icon icon-arrow_right"></i>
      </li>
      <li class="item">
        <span class="title">修改密码</span>
        <!-- <span class="prev-data"></span> -->
        <i class="icon icon-arrow_right"></i>
      </li>
      <li v-if="false" class="empty">还没有数据哦~</li>
    </ul>
    <button class="quit-account-btn">退出账号</button>
  </v-list>
</template>

<script>
import List from '@/components/list/list'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg')
    }
  },
  components: {
    'v-list': List
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.list {
  padding: 0 .25rem;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .25rem 0;
    font-size: .3rem;
    .border1px(rgba(0, 0, 0, .1));
    &:last-child {
      .border1px(transparent);
    }
    .icon-arrow_right {
      font-size: .35rem;
    }
  }
}
.quit-account-btn {
  position: fixed;
  left: 50%;
  bottom: .5rem;
  transform: translateX(-50%);
  border: 1px solid @theme-color;
  padding: .2rem .5rem;
  color: @theme-color;
  background-color: white;
  border-radius: .1rem;
}
</style>
