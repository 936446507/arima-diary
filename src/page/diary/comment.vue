<template>
  <li class="comment-item">
    <!-- 头部用户信息 -->
    <div class="user-wrap">
      <router-link :to="{name: 'user', params: {id: 1}}"
        tag="div" class="avatar">
        <img :src="avatar" alt="">
      </router-link>
      <div class="info">
        <div class="name-wrap">
          <router-link :to="{name: 'user', params: {id: 1}}" 
            tag="span"  class="name">
          {{commentItem.username}}
          </router-link>
          <span class="author-flag">作者</span>
        </div>
        <div class="meta-list-wrap">
          <meta-list>
            <li class="meta">1楼</li>
            <li class="meta">{{commentItem.time}}</li>
          </meta-list>
        </div>
      </div>
      <ul class="tool-group">
        <li @click.stop="applyComment(commentItem)" class="btn comment-btn">
          <i class="icon icon-comment"></i>
        </li>
        <li @click.stop="giveZan(commentItem)"
          :class="{'zaned': commentItem.isZaned}"  class="btn zan-btn">
          <i class="icon icon-zan"></i>
          <span class="num">{{commentItem.zan}}</span>
        </li>
      </ul>
    </div>
    <div class="content">{{commentItem.content}}</div>
    <!-- 子评论 -->
    <div class="sub-comment-wrap">
      <ul class="sub-comment-list">
        <li v-for="(subComment, index) in commentItem.subComment" :key="subComment.respondentId"
          v-if="index < 3" class="sub-comment-item">
          <!-- 回复者 -->
          <router-link :to="{name: 'user', params: {id: subComment.respondentId}}"
            tag="span" class="respondent">
            {{subComment.respondent}}：
          </router-link>
          <div class="content-wrap">
            <!-- 被回复者 -->
            <router-link :to="{name: 'user', params: {id: subComment.aiteId}}"
              tag="span" class="aite-name">
              @{{subComment.aiteName}}
            </router-link>
            <span @click.stop="applySubComment(subComment)" class="sub-content">{{subComment.content}}</span>
          </div>
          <ul v-if="false" class="tool-group">
            <li class="btn comment-btn">
              <i class="icon icon-comment"></i>
            </li>
          </ul>
        </li>
        <div v-if="!isCommentDetail && commentItem.subComment.length > 3" class="more-content-btn">
          还有 {{commentItem.subComment.length - 3}} 条评论，<span @click.stop="goCommentDetail(1)" class="more-content">点击查看</span>
        </div>
        <!-- 底部提示 -->
        <div v-if="isCommentDetail" class="end-tip">
          <span class="tip">-- 我是有底线的 --</span>
        </div>
      </ul>
    </div>
  </li>
</template>

<script>
import MetaList from '@/components/meta-list/meta-list'
import {getRouterInfo, goRouterLink} from '@/js/router'
export default {
  // 单条评论
  name: 'comment',
  props: {
    commentItem: {
      type: Object,
      default: () => { return {} }
    }
  },
  data() {
    return {
      // 是否为评论详情组件
      isCommentDetail: false,
      avatar: require('@/assets/images/logo.jpg')
    }
  },
  created() {
    this.$nextTick(() => {
      this._initCommentDetailState()
    })
  },
  methods: {
    // 初始化评论详情页评论列表
    _initCommentDetailState() {
      let routeInfo = getRouterInfo(this)
      this.isCommentDetail = routeInfo.name === 'commentDetail'
    },

    // 跳转到评论详情页
    goCommentDetail(id) {
      goRouterLink({name: 'commentDetail', params: {id: id}}, this)
    },
    // 点赞
    giveZan(commentItem) {
      this.$emit('giveZan', commentItem)
    },
    // 添加主评论回复
    applyComment(commentItem) {
      this.$emit('applyComment', commentItem)
    },
    // 添加子评论回复
    applySubComment(subCommentItem) {
      // true -> 工具菜单显示状态
      this.$emit('applySubComment', {subCommentItem, toolActionSheetShow: true})
    }
  },
  components: {
    'meta-list': MetaList
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.comment-item {
  padding: .25rem 0;
  .border1px(rgba(0, 0, 0, .35));
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
        .setImg(100%, 50%);
      }
    }
    .info {
      flex: 1;
      align-self: center;
      box-sizing: border-box;
      padding-left: .25rem;
      line-height: .35rem;
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
          background-color: @default-color;
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
          &.zaned {
            // 已经点赞样式
            color: #f56c6c;
          }
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
        border-top: .025rem dashed #ccc;
        span {padding: .25rem 0;}
        .respondent {
          font-size: .25rem;
          color: @router-color;
        }
        .content-wrap {
          display: flex;
          align-items: center;
          flex: 1;
          .aite-name {
            font-size: .25rem;
            color: @router-color;
          }
          .sub-content {
            flex: 1;
            padding: .25rem 0 .25rem .25rem;
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
      .border1px(rgba(0, 0, 0, .35), 0);
      .more-content {
        color: @router-color;
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
