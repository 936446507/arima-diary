<template>
  <li class="item">
    <div class="main">
      <div v-if="isUserInfoShow" class="info">
        <router-link :to="{name: 'user', params: {id: 1}}" 
          tag="div" class="avatar">
          <img :src="avatar" alt="">
        </router-link>
        <div class="detail">
          <router-link :to="{name: 'user', params: {id: 1}}"
            tag="span" class="name">
            有馬の日記
          </router-link>
          <span v-if="false" class="time">2018-01-12</span>
        </div>
      </div>
      <router-link  :to="{name: 'diary', params: {id: 1}}" 
        tag="div" class="title">
        有馬の日記
      </router-link>
      <div v-if="isContentSplitShow" class="split-content">
        有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記
        有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記
        有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記
      </div>
      <meta-list class="meta-list">
        <li v-if="isTimeShow" class="meta">2018-01-12</li>
        <li class="meta">阅读 666</li>
        <li class="meta">评论 10</li>
        <li class="meta">喜欢 20</li>
      </meta-list>
    </div>
    <div :style="{'background': `url(${avatar}) center  no-repeat`, 'background-size': '100%'}"
      class="diary-img"></div>
  </li>
</template>

<script>
import MetaList from '@/components/meta-list/meta-list'
import {getRouterInfo} from '@/js/router'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      // 是否显示用户头像与名字
      isUserInfoShow: false,
      // 是否显示日记内容截取部分
      isContentSplitShow: false,
      // 是否显示时间
      isTimeShow: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initShow()
    })
  },
  methods: {
    // 初始化显示
    _initShow() {
      let routerName = getRouterInfo(this).name
      if (routerName === 'home' || routerName === 'rank' || routerName === 'searchDetail') {
        [this.isUserInfoShow, this.isContentSplitShow, this.isTimeShow] =
          [true, true, false]
      } else if (routerName === 'user') {
        [this.isUserInfoShow, this.isContentSplitShow, this.isTimeShow] =
          [false, false, true]
      } else if (routerName === 'myDiary' || routerName === 'myFavorite') {
        [this.isUserInfoShow, this.isContentSplitShow, this.isTimeShow] =
          [true, false, true]
      }
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
  padding: .35rem 0 .25rem;
  box-sizing: border-box;
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
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: .25rem;
      .avatar {
        width: .75rem;
        img {
          .setImg(100%, 50%);
        }
      }
      .detail {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        padding-left: .25rem;
        line-height: .35rem;
        .name {
          color: @router-color;
        }
        .time {
          color: #ccc;
        }
      }

    }
    .title {
      padding: .1rem 0;
      font-size: .4rem;
      color: #333;
    }
    .split-content {
      .texts-ellipsis(2);
      line-height: .4rem;
    }
    .meta-list {
      padding-top: .15rem;
    }
  }
  .diary-img {
    width: 25%;
    height: 2rem;
    background-size: 100%;
  }
}
</style>

