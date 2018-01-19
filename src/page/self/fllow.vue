<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition">
        <h1 class="title">关注</h1>
      </v-header>
      <v-list>
        <ul class="list">
          <li v-for="n in 10" :key="n" class="item">
            <div class="avatar"><img :src="avatar" alt="avatar"></div>
            <div class="info">
              <div class="base">
                <span class="name">有馬の日記</span>
                <span :class="sex" class="sex-icon">
                  <i :class="`icon-${sex}`" class="icon"></i>
                </span>
              </div>
              <div class="job">前端工程师</div>
            </div>
          </li>
          <li v-if="false" class="empty">还没有数据哦~</li>
        </ul>
      </v-list>
    </div>
  </slide-transition>
</template>

<script>
import Header from '@/components/header/header'
import SlideTransition from '@/components/slide-transition/slide-transition'
import List from '@/components/list/list'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg'),
      sex: 'man'
    }
  },
  methods: {
    setTransition(transitionName) {
      this.transitionName = transitionName
    }
  },
  components: {
    'v-header': Header,
    'slide-transition': SlideTransition,
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
    .border1px(rgba(0, 0, 0, .1));
    &:last-child {
      .border1px(transparent)
    }
    .avatar {
      width: 15%;
      img {
        .setImg(100%, 50%);
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      box-sizing: border-box;
      padding-left: .25rem;
      .base {
        display: flex;
        align-items: center;
        .name {
          font-size: .35rem;
        }
      }
      .job {color: #ccc}
    }
    
  }
  .empty {
    padding: .5rem 0;
    color: #999;
    font-size: .3rem;
    text-align: center;
  }
}
</style>

