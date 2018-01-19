<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition">
        <h1 class="title">个人资料</h1>
      </v-header>
      <v-list>
        <ul class="list">
          <!-- 头像个人主页 -->
          <li v-for="item in imgData" :key="item.title" class="item">
            <span class="title">{{item.title}}</span>
            <div class="prev-data">
              <input type="file" class="file-input">
              <img :src="item.imgUrl" 
                :style="{'border-radius': item.borderRadius}" class="prev-img" />
            </div>
            <i class="icon icon-arrow_right"></i>
          </li>
          <!-- 其他项 -->
          <li v-for="item in listData" :key="item.title" 
            @click.stop="editData(item.title, item.prevData)" class="item">
            <span class="title">{{item.title}}</span>
            <span class="prev-data">{{item.prevData}}</span>
            <i class="icon icon-arrow_right"></i>
          </li>
        </ul>     
      </v-list>
      <v-modal ref="modal" :title="modalTitle" :prevData="modalPrevData"></v-modal>
    </div>
  </slide-transition>
</template>

<script>
import Header from '@/components/header/header'
import SlideTransition from '@/components/slide-transition/slide-transition'
import List from '@/components/list/list'
import Modal from '@/components/modal/modal'
export default {
  data() {
    return {
      transitionName: 'slide-left',
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
      ],
      modalTitle: '',
      modalPrevData: ''
    }
  },
  methods: {
    setTransition(transitionName) {
      this.transitionName = transitionName
    },
    editData(modalTitle, modalPrevData) {
      [this.modalTitle, this.modalPrevData] = [modalTitle, modalPrevData]
      this.$refs.modal.showModal()
    }
  },
  components: {
    'v-header': Header,
    'slide-transition': SlideTransition,
    'v-list': List,
    'v-modal': Modal
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.slide-enter, .slide-leave-to {
  // opacity: 0;
  transform: translateX(100%);
}
.slide-enter-active, .slide-leave-active {
  transition: transform .3s linear;
  transform: translateX(0);
}
// .personal-data-wrapper {
//   transition: all .3s linear;
//   transform: translateX(100%);
//   &.translateRestore {
//     transform: translateX(0)
//   }
// }
.list {
  padding: 0 .25rem;
  .item {
    position: relative;
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
    .prev-data {
      flex: 1;
      height: .75rem;
      line-height: .75rem;
      padding-right: .25rem;
      text-align: right;
      color: #999;
      font-size: .25rem;
      .file-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 99;
      }
      .prev-img {
        width: .75rem;
        height: .75rem;
      }
    }
    .icon-arrow_right {
      font-size: .35rem;
      color: #999;
    }
  }
}
</style>
