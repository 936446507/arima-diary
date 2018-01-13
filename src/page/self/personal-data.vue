<template>
  <div class="wrapper">
    <v-list title="设置">
      <ul class="list">
        <li v-for="item in imgData" :key="item.title" class="item">
          <span class="title">{{item.title}}</span>
          <div class="prev-data"><img :src="item.imgUrl" :style="{'border-radius': item.borderRadius}" class="prev-img" /></div>
          <i class="icon icon-arrow_right"></i>
        </li>
        <li v-for="item in listData" :key="item.title" class="item">
          <span class="title">{{item.title}}</span>
          <span class="prev-data">{{item.prevData}}</span>
          <i class="icon icon-arrow_right"></i>
        </li>
      </ul>
    </v-list>
  </div>
</template>

<script>
import List from '@/components/list/list'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      imgData: [
        {
          title: '头像',
          imgUrl: require('@/assets/images/logo.jpg'),
          borderRadius: '50%'
        },
        {
          title: '个人主页背景',
          imgUrl: require('@/assets/images/logo.jpg'),
          borderRadius: '.1rem'
        }
      ],
      listData: [
        {
          title: '用户名',
          prevData: '有馬の日記'
        },
        {
          title: '性别',
          prevData: '男'
        },
        {
          title: '职业',
          prevData: '前端工程师'
        },
        {
          title: '签名',
          prevData: '没有你的四月还是终究来了。'
        },
        {
          title: '博客地址',
          prevData: 'github.com/936446507'
        }
      ]
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
    padding: .25rem 0;
    font-size: .3rem;
    .border1px(rgba(0, 0, 0, .1));
    &:last-child {
      .border1px(transparent);
    }
    .title {
      color: #333;
    }
    .prev-img {
      width: .75rem;
      height: .75rem;
    }
    .prev-data {
      flex: 1;
      height: .75rem;
      line-height: .75rem;
      padding-right: .25rem;
      text-align: right;
      color: #999;
      font-size: .25rem;
    }
    .icon-arrow_right {
      font-size: .35rem;
      color: #999;
    }
  }
}
</style>
