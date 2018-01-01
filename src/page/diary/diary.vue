<template>
  <div class="diary-wrap">
    <div class="diary">
      <!-- 日记头部  作者信息之类 -->
      <header class="diary-header">
        <h1 class="title">有馬の日记</h1>
        <div class="user-info-wrap">
          <div class="user-avatar"><img :src="avatar" alt="有馬の日记"></div>
          <div class="user-name">有馬の日记</div>
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
      <!-- 日记内容 -->
      <main class="diary-content">
         先聊聊凶手吧，姑且叫他X君。我们不谈是谁，只谈犯罪心理。这也是本剧最大的亮点。
首先，X君的童年，非常不幸。
他有一个混蛋哥哥，终日以猥亵女童为乐。并且在哥哥的胁迫下，X君也沦为了帮凶：他负责诱骗女童，看门把风，并在哥哥实施猥亵后，进行善后。
诱拐成功的快感，间接实现的罪恶，使得X君幼小的心灵，开始扭曲。
作者：子戈
链接：https://www.jianshu.com/p/b26e65ba7b77
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。      
      </main>
      <!-- 关注作者模块 -->
      <div class="fllow-user-wrap">
        <div class="fllow-user">
          <header class="desc">关注作者，看更多关于TA的好日记</header>
          <main class="detail">
            <div class="user-avatar">
              <img :src="avatar" alt="">
            </div>
            <div class="user-info-wrap">
              <h1 class="user-name">有馬の日记</h1>
              <h3 class="user-intro">有馬の日记</h3>
            </div>
            <button class="fllow-btn">+ 关注</button>
          </main>
        </div>
      </div>
    </div>
    <v-comment></v-comment>
  </div>
</template>

<script>
import MetaList from '@/components/meta-list/meta-list'
import Comment from './comment'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      metaLen: 4
    }
  },
  components: {
    'meta-list': MetaList,
    'v-comment': Comment
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/common.scss';
.diary {
  padding: 0 .25rem;
}
.diary-header {
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
        width:100%;
        border-radius: 50%;
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
      height: .75rem;
      padding: .125rem .25rem;
      color: white;
      border-radius: .25rem;
      font-size: .25rem;
      background-color: $success-color;
      border: none;
    }
  }
  .diary-info {
    .diary-info-list {
      display: flex;
      align-items: baseline;
      font-size: .1rem;
      color: $default-color;
      .item::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: .05rem;
        height: .05rem;
        background-color: $default-color;
        margin: 0 .05rem;
        border-radius: 50%;
      }
      .item:last-child::after {
        content: '';
        width: 0;
        height: 0;
      }
    }
  }
}
.diary-content {
  padding: .25rem 0;
}
.fllow-user {
  padding: 0 .15rem;
  border: .025rem solid $default-color;
  .desc {
    padding: .1rem 0;
    font-size: .1rem;
    color: $default-color;
    border-bottom: .005rem solid $default-color;
  }
  .detail {
    display: flex;
    padding: .25rem 0;
    font-size: 0;
    .user-avatar {
      width: 10%;
      img {
        width: 100%;
        border-radius: 50%;
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
      }
    }
    .fllow-btn {
      width: 25%;
      height: .75rem;
      padding: .125rem .25rem;
      color: white;
      border-radius: .25rem;
      font-size: .25rem;
      background-color: #13CE66;
      border: none;
    }
  }
}
</style>
