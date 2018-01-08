<template>
  <div class="comment-content-wrap">
    <ul class="comment-content">
      <v-comment></v-comment>
    </ul>
  </div>
</template>

<script>
import Comment from './comment'
export default {
  data() {
    return {
    }
  },
  components: {
    'v-comment': Comment
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
// 评论列表
.comment-content {
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
      padding: .15rem .25rem;
    }
    .sub-comment-wrap {
      padding: 0 .25rem;
      .sub-comment-list {
        .sub-comment-item {
          display: flex;
          padding: .15rem 0;
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
    }
  }
}
</style>
