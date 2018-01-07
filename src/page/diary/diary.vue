<template>
  <div class="wrapper">
    <v-header class="diary-header-tool">
      <div class="avatar"><img :src="avatar" alt=""></div>
    </v-header>
    <div class="diary-wrap">
      <v-scroll class="scroll-wrap" ref="scrollWrap">
        <div class="diary">
          <!-- 日記头部  作者信息之类 -->
          <header class="diary-header">
            <h1 class="title">有馬の日記</h1>
            <div class="user-info-wrap">
              <div class="user-avatar"><img :src="avatar" alt="有馬の日記"></div>
              <div class="user-name">有馬の日記</div>
              <button class="fllow-btn">+ 关注</button>
            </div>
            <div class="diary-info">
              <meta-list>
                <li class="meta">2018-1-1 00:00</li>
                <li class="meta">阅读 666</li>
                <li class="meta">评论 666</li>
                <li class="meta">喜欢 666</li>
              </meta-list>
            </div>
          </header>
          <!-- 日記内容 -->
          <main class="diary-content">
            先聊聊凶手吧，姑且叫他X君。我们不谈是谁，只谈犯罪心理。这也是本剧最大的亮点。
            首先，X君的童年，非常不幸。他有一个混蛋哥哥，终日以猥亵女童为乐。
            并且在哥哥的胁迫下，X君也沦为了帮凶：他负责诱骗女童，看门把风，并在哥哥实施猥亵后，进行善后。
            诱拐成功的快感，间接实现的罪恶，使得X君幼小的心灵，开始扭曲。
            作者：子戈链接：https://www.jianshu.com/p/b26e65ba7b77來源：简书著作权归作者所有。
            商业转载请联系作者获得授权，非商业转载请注明出处。
            先聊聊凶手吧，姑且叫他X君。我们不谈是谁，只谈犯罪心理。这也是本剧最大的亮点。
            首先，X君的童年，非常不幸。他有一个混蛋哥哥，终日以猥亵女童为乐。
            并且在哥哥的胁迫下，X君也沦为了帮凶：他负责诱骗女童，看门把风，并在哥哥实施猥亵后，进行善后。
            诱拐成功的快感，间接实现的罪恶，使得X君幼小的心灵，开始扭曲。
            作者：子戈链接：https://www.jianshu.com/p/b26e65ba7b77來源：简书著作权归作者所有。
            商业转载请联系作者获得授权，非商业转载请注明出处。
            先聊聊凶手吧，姑且叫他X君。我们不谈是谁，只谈犯罪心理。这也是本剧最大的亮点。
            首先，X君的童年，非常不幸。他有一个混蛋哥哥，终日以猥亵女童为乐。
            并且在哥哥的胁迫下，X君也沦为了帮凶：他负责诱骗女童，看门把风，并在哥哥实施猥亵后，进行善后。
            诱拐成功的快感，间接实现的罪恶，使得X君幼小的心灵，开始扭曲。
            作者：子戈链接：https://www.jianshu.com/p/b26e65ba7b77來源：简书著作权归作者所有。
            商业转载请联系作者获得授权，非商业转载请注明出处。
            先聊聊凶手吧，姑且叫他X君。我们不谈是谁，只谈犯罪心理。这也是本剧最大的亮点。
            首先，X君的童年，非常不幸。他有一个混蛋哥哥，终日以猥亵女童为乐。
            并且在哥哥的胁迫下，X君也沦为了帮凶：他负责诱骗女童，看门把风，并在哥哥实施猥亵后，进行善后。
            诱拐成功的快感，间接实现的罪恶，使得X君幼小的心灵，开始扭曲。
            作者：子戈链接：https://www.jianshu.com/p/b26e65ba7b77來源：简书著作权归作者所有。
            商业转载请联系作者获得授权，非商业转载请注明出处。
          </main>
          <!-- 关注作者模块 -->
          <div class="fllow-user-wrap">
            <div class="fllow-user">
              <header class="desc">关注作者，看更多关于TA的好日記</header>
              <main class="detail">
                <div class="user-avatar">
                  <img :src="avatar" alt="">
                </div>
                <div class="user-info-wrap">
                  <h1 class="user-name">有馬の日記</h1>
                  <h3 class="user-intro">有馬の日記</h3>
                </div>
                <button class="fllow-btn">+ 关注</button>
              </main>
            </div>
          </div>
          <!-- 评论区 -->
          <div class="comment-wrap" ref="commentWrap">
            <!-- 头部信息栏 -->
            <header class="comment-header-meta">
              <span class="comment-num">评论 666</span>
            </header>
            <comment-list v-for="n in 5" :key="n"></comment-list>
            <!-- 没有评论 -->
            <div v-if="false" class="empty-comment">
              <img :src="emptyCommentBg" alt="">
              <p class="desc">我在等着你的评论呢~</p>
            </div>
            </div>
        </div>
      </v-scroll>
      
    </div>
    <!-- 底部固定工具条 -->
    <footer-tool class="footer-tool-wrap">
      <!-- 模拟input输入框 -->
      <div @click.stop="showTextareaModal" class="imitate-input">
        <i class="icon icon-input-edit"></i>
        <span class="desc">请输入评论</span>
      </div>
      <ul class="icon-list">
        <li @click.stop="scrollToComment" class="icon-item">
          <i class="icon icon-comment"></i>
          <span class="num">999</span>
        </li>
        <li class="icon-item">
          <i class="icon icon-favorite"></i>
          <span class="num">999</span>
        </li>
      </ul>
    </footer-tool>
    <!-- 评论文本域模态框状态 -->
    <textarea-modal ref="textareaModal"></textarea-modal>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import MetaList from '@/components/meta-list/meta-list'
import CommentList from './comment-list'
import footerTool from './footer-tool'
import textareaModal from './textarea-modal'

export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      emptyCommentBg: require('@/assets/images/empty-comment-bg.png'),
      // 评论文本域模态框状态
      isTextareaModalShow: false,
      actionSheetStatus: false,
      menu: {
        menu1: '<textarea style="width: 100%;height: 4rem;border: none;" class="textarea">web</textarea>'
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {
    showTextareaModal() {
      this.$refs.textareaModal.show()
    },
    // 滚动到评论区
    scrollToComment() {
      this.$refs.scrollWrap.scroll.scrollToElement(this.$refs.commentWrap, 600, false, false)
    }
  },
  components: {
    'v-header': Header,
    'v-scroll': Scroll,
    'meta-list': MetaList,
    'comment-list': CommentList,
    'footer-tool': footerTool,
    'textarea-modal': textareaModal
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/common.scss';
.textarea {
  width: 100%;
  height: 4rem;
  border: none;
}
.diary-header-tool {
  .avatar {
    display: flex;
    align-items: center;
    width: 7%;
    margin-left: .25rem;
    img {
      @include setImg(100%, 50%)
    }
  }
}
.diary-wrap {
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  width: 100%;
  .scroll-wrap {
    height: 92%;
  }
}
// 日記头部
.diary-header {
  padding: 0 .25rem;
  .title {
    font-size: .75rem;
  }
  .user-info-wrap {
    display: flex;
    width: 100%;
    padding: .25rem 0;
    font-size: 0;
    .user-avatar {
      width: 10%;
      img {
        @include setImg(100%, 50%);
      }
    }
    .user-name {
      flex: 1;
      align-self: center;
      box-sizing: border-box;
      width:65%;
      padding-left: .25rem;
      font-size: .25rem;
    }
    .fllow-btn {
      width: 25%;
      height: .6rem;
      // padding: .125rem .25rem;
      color: white;
      border-radius: .25rem;
      font-size: .25rem;
      background-color: $success-color;
      border: none;
    }
  }
}
// 日記内容区
.diary-content {
  padding: .25rem;
}
// 关注作者区
.fllow-user-wrap {
  padding: 0 .25rem;
  .fllow-user {
    padding: 0 .15rem;
    border: .025rem solid rgba(0, 0, 0, .5);
    .desc {
      padding: .1rem 0;
      font-size: .1rem;
      color: $default-color;
      @include border1px(rgba(0, 0, 0, .5))
    }
    .detail {
      display: flex;
      padding: .25rem 0;
      font-size: 0;
      .user-avatar {
        width: 10%;
        img {
          @include setImg(100%, 50%);
        }
      }
      .user-info-wrap {
        flex: 1;
        align-self: center;
        box-sizing: border-box;
        padding-left: .25rem;
        .user-name {
          font-size: .35rem;
        }
        .user-intro {
          font-size: .15rem;
          color: rgba(0, 0, 0, .5);
        }
      }
      .fllow-btn {
        width: 25%;
        height: .6rem;
        // padding: .125rem .25rem;
        color: white;
        border-radius: .25rem;
        font-size: .25rem;
        background-color: #13CE66;
        border: none;
      }
    }
  }
}
// 评论区
.comment-wrap {
  padding: .25rem 0;
  .comment-header-meta {
    padding: .1rem .25rem;
    background-color: rgba(0, 0, 0, .05);
    .comment-num {
      color: $error-color;
    }
  }
  .empty-comment {
    padding: .25rem 0;
    text-align: center;
    color: rgba(0, 0, 0, .5);
    img {width: 50%;}
    .desc {padding: .25rem 0;}
  }
}
// 底部固定工具条
.footer-tool-wrap {
  .imitate-input {
    display: flex;
    align-items: center;
    flex-basis: 4rem;
    height: 100%;
    padding: .05rem .125rem;
    border: .025rem solid rgba(0, 0, 0, .35);
    color:rgba(0, 0, 0, .35);
    border-radius: .05rem;
    .desc {
      padding-left: .2rem;
    }
  }
  .icon-list {
    display: flex;
    flex: 1;
    padding-left: .5rem;
    .icon-item {
      position: relative;
      flex: 1;
      height: 100%;
      .icon {
        position: absolute;
        bottom: 0;
        font-size: .5rem;
        color: rgba(0, 0, 0, .5);
      }
      .num {
        position: absolute;
        top: .05rem;
        right: .2rem;
        width: .75rem;
        padding: 0 .125rem;
        text-align: center;
        background-color: #f56c6c;
        color: white;
        border-radius: .25rem;
        font-size: .25rem;
      }
    }
  }
}
</style>
