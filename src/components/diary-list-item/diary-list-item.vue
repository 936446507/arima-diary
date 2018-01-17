<template>
  <li class="item">
    <div class="main">
      <div class="info">
        <span class="name">有馬の日記</span><span class="time">2018-01-12</span>
      </div>
      <div class="title">有馬の日記</div>
      <div v-if="false" class="split-content">
        有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記
        有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記
        有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記
      </div>
      <meta-list class="meta-list">
        <li class="meta">阅读 666</li>
        <li class="meta">评论 10</li>
        <li class="meta">喜欢 20</li>
      </meta-list>
    </div>
    <div class="diary-img" :style="{'background': `url(${avatar}) center  no-repeat`, 'background-size': '100%'}"></div>
  </li>
</template>

<script>
import MetaList from '@/components/meta-list/meta-list'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg')
    }
  },
  components: {
    'meta-list': MetaList
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.item {
  display: flex;
  align-items: center;
  padding: .25rem 0;
  .border1px(rgba(0, 0, 0, .1));
  &:last-child {
    .border1px(transparent)
  }
  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: .25rem;
    .info {
      font-size: .25rem;
      .name {
        color: @router-color;
      }
      .time {
        padding-left: .1rem;
        color: #ccc;
      }
    }
    .title {
      padding: .15rem 0;
      font-size: .4rem;
      color: #333;
    }
    .split-content {
      .texts-ellipsis(3);
        padding-top: .25rem;
    }
  }
  .diary-img {
    width: 25%;
    height: 2rem;
    background-size: 100%;
  }
}
</style>

