<template>
  <slide-transition :transitionName="transitionName">
    <div class="wrapper router-view">
      <v-header @setTransition="setTransition" :isIncreaseZIndex="true"
        ref="diaryHeaderTool" class="diary-header-tool">
        <router-link :to="{name: 'user', params: {id: 1}}"
          tag="div" v-show="avatarStatus" class="avatar">
        <img :src="avatar" alt="">
        </router-link>
      </v-header>
      <div class="diary-wrap">
        <v-scroll class="scroll-wrap" :probeType="2"
          :bounce="true" ref="scrollWrap">
          <div class="diary">
            <!-- 日記头部  作者信息之类 -->
            <header class="diary-header">
              <h1 class="title">有馬の日記</h1>
              <div class="user-info-wrap">
                <router-link :to="{name: 'user', params: {id: 1}}"
                  tag="div" class="user-avatar">
                  <img :src="avatar" alt="有馬の日記">
                </router-link>
                <router-link :to="{name: 'user', params: {id: 1}}"
                  tag="div" class="user-name">
                  有馬の日記
                </router-link>
                <!-- 关注按钮 -->
                <div @click.stop="fllowUser" class="tool-wrap">
                  <button v-show="!isHadFllowed" class="btn fllow-btn">
                    <i class="icon icon-plus"></i><span class="desc">关注</span>
                  </button>
                  <button v-show="isHadFllowed" class="btn fllowed-btn">
                    <i class="icon icon-right"></i><span class="desc">已关注</span>
                  </button>
                </div>
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
                <header class="header-desc">关注作者，看更多关于TA的好日記</header>
                <main class="detail">
                  <router-link :to="{name: 'user', params: {id: 1}}"
                    tag="div" class="user-avatar">
                    <img :src="avatar" alt="">
                  </router-link>
                  <div class="user-info-wrap">
                    <router-link :to="{name: 'user', params: {id: 1}}"
                      tag="h1" class="user-name">
                      有馬の日記
                    </router-link>
                    <h3 class="user-intro">有馬の日記</h3>
                  </div>
                  <div @click.stop="fllowUser" class="tool-wrap">
                    <button v-show="!isHadFllowed" class="btn fllow-btn">
                      <i class="icon icon-plus"></i><span class="desc">关注</span>
                    </button>
                    <button v-show="isHadFllowed" class="btn fllowed-btn">
                      <i class="icon icon-right"></i><span class="desc">已关注</span>
                    </button>
                  </div>
                </main>
              </div>
            </div>
            <!-- 评论区 -->
            <div class="comment-wrap" ref="commentWrap">
              <!-- 头部信息栏 -->
              <header class="comment-header-meta">
                <span class="comment-num">评论 {{commentList.length}}</span>
              </header>
              <!-- 评论列表 -->
              <div class="comment-content-wrap">
                <ul class="comment-content">
                  <v-comment v-for="commentItem in commentList" 
                    :key="commentItem.commentId" :commentItem="commentItem" 
                    @applyComment="applyComment" @applySubComment="applySubComment"
                    @giveZan="giveZan" @seeCommentDetail="seeCommentDetail">
                  </v-comment>
                </ul>
              </div>
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
            <i class="icon icon-comment">
              <span class="num">999</span>
            </i>
          </li>
          <li @click.stop="favoriteDiary" class="icon-item">
            <i :class="{'icon-favorite': !isFavoriteDiary, 
              'icon-favorited': isFavoriteDiary}" class="icon">
                <span class="num">999</span>
              </i>
          </li>
        </ul>
      </footer-tool>
      <!-- 评论详情组件 -->
      <comment-detail v-show="commentDetailShow"
        :commentItem="curClickCommentDetail">
      </comment-detail>
      <!-- 评论文本域组件 -->
      <comment-textarea ref="commentTextarea" :isApplyComment="isApplyComment"></comment-textarea>
      <!-- 提示 -->
      <toast v-model="tipShow" position="middle" type="text" :text="tipText"></toast>
       <!-- 工具菜单- 添加子评论等 -->
      <actionsheet v-model="toolActionSheetShow" theme="android"
        :menus="toolMenus" @on-click-menu="selectMenu">
      </actionsheet>
    </div>
  </slide-transition>
</template>

<script>
import SlideTransition from '@/components/slide-transition/slide-transition'
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
import MetaList from '@/components/meta-list/meta-list'
import Comment from '@/page/diary/comment'
import CommentDetail from '@/page/diary/comment-detail'
import CommentTextarea from '@/page/diary/comment-textarea'
import footerTool from '@/page/diary/footer-tool'
import {Actionsheet, Toast, Popup, XTextarea} from 'vux'
import {goRouterLink} from '@/js/router'

export default {
  data() {
    return {
      transitionName: 'slide-left',
      avatar: require('@/assets/images/logo.jpg'),
      emptyCommentBg: require('@/assets/images/empty-comment-bg.png'),
      avatarStatus: false,
      // 是否已关注了作者
      isHadFllowed: false,
      // 是否已喜欢该日记
      isFavoriteDiary: false,
      scrollY: 0,
      // 提示框
      tipShow: false,
      tipText: '',
      // 工具菜单
      toolActionSheetShow: false,
      // 点击子评论
      curClickSubCommentItem: {},
      // 用于评论文本域的，是否是回复主评论
      isApplyComment: true,
      // 点击的查看详情的评论
      curClickCommentDetail: {},
      commentDetailShow: false,
      commentList: [
        {
          commentId: 1,
          avatar: require('@/assets/images/logo.jpg'),
          userId: 1,
          username: '有馬の日记',
          time: '2018-01-01 00:00',
          isZaned: false,
          zan: 999,
          content: '有馬の日记',
          subComment: [
            {
              respondentId: 1,
              respondent: '桐山零',
              aiteId: 2,
              aiteName: '有馬の日记',
              content: '有馬の日记'
            },
            {
              respondentId: 2,
              respondent: '桐山零',
              aiteId: 2,
              aiteName: '有馬の日记',
              content: '有馬の日记'
            },
            {
              respondentId: 3,
              respondent: '桐山零',
              aiteId: 2,
              aiteName: '有馬の日记',
              content: '有馬の日记'
            },
            {
              respondentId: 4,
              respondent: '桐山零',
              aiteId: 2,
              aiteName: '有馬の日记',
              content: '有馬の日记'
            }
          ]
        },
        {
          commentId: 2,
          avatar: require('@/assets/images/logo.jpg'),
          userId: 1,
          username: '有馬の日记',
          time: '2018-01-01 00:00',
          isZaned: true,
          zan: 999,
          content: '有馬の日记',
          subComment: [
            {
              respondentId: 1,
              respondent: '桐山零',
              aiteId: 2,
              aiteName: '有馬の日记',
              content: '有馬の日记'
            },
            {
              respondentId: 2,
              respondent: '桐山零',
              aiteId: 2,
              aiteName: '有馬の日记',
              content: '有馬の日记'
            },
            {
              respondentId: 3,
              respondent: '桐山零',
              aiteId: 2,
              aiteName: '有馬の日记',
              content: '有馬の日记'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._setHeaderToolStatus()
    })
  },
  methods: {
    // 设置头部工具条状态
    _setHeaderToolStatus() {
      let scroll = this.$refs.scrollWrap.scroll
      scroll.on('scroll', (pos) => {
        if (pos.y <= this.scrollY) {
          // 往下滑
          this.scrollY = pos.y
          this.$refs.diaryHeaderTool.$el.style.transform = 'translateY(-1rem)'
        } else {
          // 往上滑
          this.scrollY = pos.y
          this.$refs.diaryHeaderTool.$el.style.transform = 'translateY(0)'
          this.avatarStatus = true
        }
      })
      scroll.on('scrollEnd', (pos) => {
        if (pos.y === 0) {
          this.avatarStatus = false
        }
      })
    },
    // 关注作者
    fllowUser() {
      if (!this.isLogin) {
        goRouterLink({name: 'login'}, this)
      } else {
        this.isHadFllowed = !this.isHadFllowed
        this.tipShow = true
        this.tipText = this.isHadFllowed ? '关注成功' : '已取消关注'
      }
    },
    // 点赞
    giveZan(commentItem) {
      if (!this.isLogin) {
        goRouterLink({name: 'login'}, this)
      }
    },
    // 滚动到评论区
    scrollToComment() {
      console.log(this.$refs.scrollWrap)
      this.$refs.scrollWrap.scrollToElement(this.$refs.commentWrap, 600)
    },

    //  选择弹出层菜单
    selectMenu(menuKey, menuItem) {
      console.log(menuKey, menuItem)
      if (menuKey === 'menu1' || menuItem === '回复') {
        this.textareaValue = `@${this.curClickSubCommentItem.respondent}`
        this.isApplyComment = false
        this.showTextareaModal()
      } else if (menuKey === 'menu2' || menuItem === '复制') {
        this.cloneComment(this.curClickSubCommentItem.content)
      }
    },
    // 添加主评论回复
    applyComment(commentItem) {
      if (!this.isLogin) {
        goRouterLink({name: 'login'}, this)
      } else {
        this.isApplyComment = true
        this.showTextareaModal()
      }
    },
    // 添加子评论回复 接收子组件返回的评论数据
    applySubComment(arg) {
      if (this.isLogin) {
        this.toolActionSheetShow = arg.toolActionSheetShow
        this.curClickSubCommentItem = arg.subCommentItem
      }
    },
    // 查看评论详情
    seeCommentDetail(commentItem) {
      this.commentDetailShow = true
      this.curClickCommentDetail = commentItem
    },
    // 添加喜欢日记
    favoriteDiary() {
      if (!this.isLogin) {
        goRouterLink({name: 'login'}, this)
      } else {
        this.isFavoriteDiary = !this.isFavoriteDiary
      }
    },
    // 显示评论文本域
    showTextareaModal() {
      if (!this.isLogin) {
        goRouterLink({name: 'login'}, this)
      } else {
        this.$refs.commentTextarea.showTextareaModal()
      }
    },

    // 复制评论内容
    cloneComment(content) {
      let aux = document.createElement('input')
      aux.setAttribute('value', content)
      document.body.appendChild(aux)
      aux.select()
      document.execCommand('copy')
      document.body.removeChild(aux)
    },

    // 底部数值大小操作
    setFooterNumber(number, isRepeatSet) {
      /*
      number: 数值
      isRepeatSet: 数值加一后再执行是否减一
      */
      return isRepeatSet ? --number : ++number
    },

    // 设置过渡
    setTransition(transitionName) {
      console.log(transitionName)
      this.transitionName = transitionName
    }
  },
  computed: {
    // 工具菜单
    toolMenus() {
      let toolMenus = {
        menu1: '回复',
        menu2: '复制',
        menu3: '查看详情',
        menu4: '删除'
      }

      return toolMenus
    },
    // 登录状态
    isLogin() {
      return this.$store.getters.getLoginStatus
    }
  },
  components: {
    'slide-transition': SlideTransition,
    'v-header': Header,
    'v-scroll': Scroll,
    'meta-list': MetaList,
    'v-comment': Comment,
    'footer-tool': footerTool,
    'comment-detail': CommentDetail,
    'comment-textarea': CommentTextarea,
    Actionsheet,
    Toast,
    Popup,
    XTextarea
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.textarea {
  width: 100%;
  height: 4rem;
  border: none;
}
.diary-header-tool {
  .avatar {
    display: flex;
    align-items: center;
    width: .5rem;
    margin-left: .25rem;
    img {
      .setImg(100%, 50%)
    }
  }
}
.diary-wrap {
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
// 关注 已关注按钮
.btn {
  width: 100%;
  height: .6rem;
  border: none;
  border-radius: .25rem;
  font-size: .25rem;
  padding: 0 .5rem;
  &.fllow-btn {
    color: white;
    background-color: @success-color;
  }
  &.fllowed-btn {
    color: #ccc;
    border: 1px solid #ccc;
    background-color: white;
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
      width: .75rem;
      img {
        .setImg(100%, 50%);
      }
    }
    .user-name {
      flex: 1;
      align-self: center;
      box-sizing: border-box;
      padding-left: .25rem;
      font-size: .25rem;
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
    .header-desc {
      padding: .1rem 0;
      font-size: .1rem;
      color: @default-color;
      .border1px(rgba(0, 0, 0, .5))
    }
    .detail {
      display: flex;
      align-items: center;
      padding: .25rem 0;
      font-size: 0;
      .user-avatar {
        width: .75rem;
        img {
          .setImg(100%, 50%);
        }
      }
      .user-info-wrap {
        flex: 1;
        align-self: center;
        box-sizing: border-box;
        padding-left: .25rem;
        line-height: .5rem;
        .user-name {
          font-size: .35rem;
        }
        .user-intro {
          font-size: .15rem;
          color: rgba(0, 0, 0, .5);
        }
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
      color: @error-color;
    }
  }
  // 评论列表
  .comment-content {
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
              color: @router-color;
            }
            .content-wrap {
              flex: 1;
              .aite-name {
                font-size: .25rem;
                color: @router-color;
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
          .border1px(rgba(0, 0, 0, .35), 0);
          .more-content {
            color: @router-color;
          }
        }
      }
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
      display: flex;
      align-items: center;
      position: relative;
      flex: 1;
      height: 100%;
      .icon {
        position: relative;
        font-size: .4rem;
        color: rgba(0, 0, 0, .5);
        &.icon-favorited {
          color: #ea6f5a;
        }
      }
      .num {
        position: absolute;
        top: -.1rem;
        right: -.2rem;
        padding: .025rem .05rem;
        text-align: center;
        background-color: #f56c6c;
        color: white;
        border-radius: .1rem;
        font-size: .1rem;
      }
    }
  }
}
</style>
