<template>
  <div class="comment-wrap">
    <header class="comment-header-meta">
      <span class="comment-num">评论 666</span>
    </header>
    <main class="comment-content-wrap">
      <ul class="comment-content">
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
              <li class="comment-btn"></li>
              <li class="zan-btn"></li>
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
                  <li class="comment-btn"></li>
                  <li class="zan-btn"></li>
                </ul>
                
              </li>
              <div class="more-content-btn">
                还有 2 条评论，<span class="more-content">点击查看</span>
              </div>
            </ul>
          </div>
        </li>
      </ul>
    </main>
  </div>
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

<style lang="scss" scoped>
@import '../../assets/style/common.scss';
.comment-wrap {
  padding: .25rem 0;
  .comment-header-meta {
    padding: .1rem .25rem;
    background-color: rgba(0, 0, 0, .1);
    .comment-num {
      color: $error-color;
    }
  }
  .comment-content-wrap {
    padding: .25rem 0;
  }
}
// 评论列表
.comment-content {
  .comment-item {
    padding: .1rem 0;
    border-bottom: .025rem solid #ccc;
    &:last-child {
      border-bottom: none;
    }
    .user-wrap {
      display: flex;
      padding: 0 .25rem;
      .avatar {
        width: 10%;
        img {
          width: 100%;
          border-radius: 50%;
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
      .tool-grop {
        width: 30%;
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
          }
        }
      }
      .more-content-btn {
        padding: .1rem 0;
        color: #ccc;
        border-top: .025rem solid #ccc;
        .more-content {
          color: $active-color;
        }
      }
    }
  }
}
</style>
