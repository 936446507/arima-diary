<template>
  <div class="personal-data-wrapper" ref="personalData">
    <v-list title="个人资料">
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
          @click.stop="editData(item)" class="item">
          <span class="title">{{item.title}}</span>
          <span class="prev-data">{{item.prevData}}</span>
          <i class="icon icon-arrow_right"></i>
        </li>
      </ul>     
    </v-list>
    <v-modal ref="modal" :title="modalTitle" :prevData="modalPrevData"></v-modal>
    <!-- 性别 -->
    <actionsheet v-model="sexShow" :menus="sexMenus"
      @on-click-menu="setSex" show-cancel>
    </actionsheet>
    <!-- 生日 -->
    <datetime v-model="birthday" @on-change="setBirthday" :show.sync="birthdayShow"></datetime>
    <!-- 地区 -->
    <x-address style="display:none;" title="地区" v-model="address" 
      @on-shadow-change="onShadowChange"  @on-hide="setAddress" hide-district
      :list="addressData" placeholder="请选择你所在地区" :show.sync="addressShow">
    </x-address>
    <!-- 职业 -->
    <actionsheet v-model="jobShow" :menus="jobMenus" show-cancel @on-click-menu="setJob"></actionsheet>
    <!-- 提示 -->
    <toast v-model="tipShow" text="修改成功" type="text" position="middle"></toast>
  </div>
</template>

<script>
import List from '@/components/list/list'
import Modal from '@/components/modal/modal'
import {Actionsheet, XAddress, Toast, Datetime, ChinaAddressV4Data, Value2nameFilter as getAddressName} from 'vux'
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
          type: 'username',
          title: '用户名',
          prevData: '有馬の日記',
          isNeedModal: true
        },
        {
          type: 'sex',
          title: '性别',
          prevData: '男'
        },
        {
          type: 'birthday',
          title: '生日',
          prevData: '2016-01-27'
        },
        {
          type: 'address',
          title: '地区',
          prevData: '广东省 广州市'
        },
        {
          type: 'university',
          title: '大学',
          prevData: '别人家的大学',
          isNeedModal: true
        },
        {
          type: 'job',
          title: '职业',
          prevData: '前端工程师'
        },
        {
          type: 'sign',
          title: '签名',
          prevData: '没有你的四月还是终究来了。',
          isNeedModal: true
        },
        {
          type: 'blog',
          title: '博客地址',
          prevData: 'github.com/936446507',
          isNeedModal: true
        }
      ],
      modalTitle: '',
      modalPrevData: '',
      // 性别
      sexShow: false,
      sexMenus: {
        menu1: '男',
        menu2: '女',
        menu3: '就是不告诉你'
      },
      // 生日
      birthdayShow: false,
      birthday: '',
      // 地区
      addressShow: false,
      addressData: ChinaAddressV4Data,
      address: [],
      // 职业
      jobShow: false,
      jobMenus: [
        {
          label: '请选择你的职业',
          type: 'info'
        },
        {
          label: '学生',
          type: 'primary',
          value: '学生'
        },
        {
          label: 'web前端工程师',
          type: 'primary',
          value: 'web前端工程师'
        },
        {
          label: 'JAVA开发工程师',
          type: 'primary',
          value: 'JAVA开发工程师'
        },
        {
          label: 'PHP开发工程师',
          type: 'primary',
          value: 'PHP开发工程师'
        },
        {
          label: '移动开发工程师',
          type: 'primary',
          value: '移动开发工程师'
        },
        {
          label: '数据库工程师',
          type: 'primary',
          value: '数据库工程师'
        },
        {
          label: 'UI设计师',
          type: 'primary',
          value: 'UI设计师'
        },
        {
          label: '全栈工程师',
          type: 'primary',
          value: '全栈工程师'
        },
        {
          label: '算法工程师',
          type: 'primary',
          value: '算法工程师'
        },
        {
          label: '产品经理',
          type: 'primary',
          value: '产品经理'
        },
        {
          label: '其他',
          type: 'primary',
          value: '其他'
        }
      ],
      // 提示
      tipShow: false
    }
  },
  methods: {
    // 选择性别
    setSex(menuKey, menuItem) {
      console.log(menuKey, menuItem)
      if (menuKey !== 'cancel') {
        this.listData[1].prevData = menuItem
      }
    },

    // 设置生日
    setBirthday(value) {
      console.log(value)
      this.listData[2].prevData = value
    },

    // 获取中文地址名称
    getAddressName (value) {
      return getAddressName(value, ChinaAddressV4Data)
    },
    // 地址改变触发事件
    onShadowChange(ids, names) {
      console.log(ids, names)
      this.address = ids
      console.log(this.getAddressName(this.address))
    },
    // 设置地址
    setAddress() {
      this.listData[3].prevData = this.getAddressName(this.address)
      this.tipShow = true
    },

    // 设置职业
    setJob(menuKey, menuItem) {
      console.log(menuKey, menuItem)
      this.listData[5].prevData = menuKey
    },

    // 显示各类型遮罩
    editData(item) {
      if (!item.isNeedModal) {
        this[`${item.type}Show`] = true
      } else {
        [this.modalTitle, this.modalPrevData] = [item.title, item.prevData]
        this.$refs.modal.showModal()
      }
    }
  },
  components: {
    'v-list': List,
    'v-modal': Modal,
    Actionsheet,
    XAddress,
    Toast,
    Datetime
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
