<template>
  <li class="comment-item">
    <div class="user-wrap">
      <div class="avatar">
        <img :src="avatar" alt="">
      </div>
      <div class="info">
        <div class="name-wrap">
          <span class="name">有馬の日记</span>
          <span class="author-flag">作者</span>
        </div>
        <div class="meta-list-wrap">
          <meta-list>
            <li class="meta">1楼</li>
            <li class="meta">2018.1.1 00:00</li>
          </meta-list>
        </div>
      </div>
      <ul class="tool-group">
        <li class="btn comment-btn"><i class="icon icon-comment"></i></li>
        <li class="btn zan-btn"><i class="icon icon-zan"></i><span class="num">999</span></li>
      </ul>
    </div>
    <div class="content">有馬の日记</div>
    <div class="sub-comment-wrap">
      <ul class="sub-comment-list">
        <li v-for="n in 2" :key="n" class="sub-comment-item">
          <!-- 回复者 -->
          <span class="respondent">桐山零：</span>
          <div class="content-wrap">
            <!-- 被回复者 -->
            <span class="aite-name">@有馬の日记</span>
            <span class="sub-content">有馬の日记</span>
          </div>
          <ul class="tool-group">
            <li class="btn comment-btn"><i class="icon icon-comment"></i></li>
          </ul>
        </li>
        <div v-if="!isCommentDetail" class="more-content-btn">
          还有 2 条评论，<span class="more-content">点击查看</span>
        </div>
        <!-- 底部提示 -->
        <div v-if="isCommentDetail" class="end-tip">
          <span class="tip">-- end --</span>
        </div>
      </ul>
    </div>
  </li>
</template>

<script>
import MetaList from '@/components/meta-list/meta-list'
import {getRouteInfo} from '@/assets/js/routeInfo'
export default {
  // 单条评论
  name: 'comment',
  data() {
    return {
      // 是否为评论详情组件
      isCommentDetail: false,
      avatar: require('@/assets/images/logo.jpg')
    }
  },
  created() {
    this.$nextTick(() => {
      this.initCommentDetailState()
    })
  },
  methods: {
    initCommentDetailState() {
      let routeInfo = getRouteInfo(this)
      this.isCommentDetail = routeInfo.name === 'commentDetail'
    }
  },
  components: {
    'meta-list': MetaList
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/common.scss';
.comment-item {
  padding: .25rem 0;
  @include border1px(rgba(0, 0, 0, .35));
  &:last-child {
    border-bottom: none;
    &::before {
      height: 0;
    }
  }
  .user-wrap {
    display: flex;
    padding: 0 .25rem;
    .avatar {
      width: 10%;
      img {
        @include setImg(100%, 50%);
      }
    }
    .info {
      flex: 1;
      align-self: center;
      box-sizing: border-box;
      padding-left: .25rem;
      .name-wrap {
        font-size: 0;
        .name {
          font-size: .25rem;
        }
        .author-flag {
          margin-left: .15rem;
          padding: 0 .1rem;
          border-radius: .15rem;
          color: white;
          background-color: $default-color;
          font-size: .25rem;
        }
      }
    }
    .tool-group {
      display: flex;
      width: 30%;
      justify-content: center;
      align-items: center;
      .btn {
        flex: 1;
        font-size: .35rem;
        &.zan-btn {
          display: flex;
          align-items: center;
          .num {
            padding-left: .1rem;
            font-size: .25rem;
          }
        }
      }
    }
  }
  .content {
    padding: .25rem;
  }
  .sub-comment-wrap {
    padding: 0 .25rem;
    .sub-comment-list {
      .sub-comment-item {
        display: flex;
        padding: .25rem 0;
        border-top: .025rem dashed #ccc;
        .respondent {
          font-size: .25rem;
          color:$active-color;
        }
        .content-wrap {
          flex: 1;
          .aite-name {
            font-size: .25rem;
            color:$active-color;
          }
          .sub-content {
            font-size: .25rem;
          }
        }
        .tool-group {
          width: 20%;
          .btn {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
            font-size: .35rem;
          }
        }
      }
    }
    .more-content-btn {
      padding: .1rem 0;
      color: #ccc;
      @include border1px(rgba(0, 0, 0, .35), 0);
      .more-content {
        color: $active-color;
      }
    }
    .end-tip {
      padding: .25rem 0;
      text-align: center;
      border-top: .025rem dashed #ccc;
      .tip {
        color: #ccc;
      }
    }
  }
}
</style>
