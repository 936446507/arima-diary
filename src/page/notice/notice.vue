<template>
  <div class="notice-wrap">
    <main-header title="消息">
      <router-link :to="{name: 'search'}" tag="i" class="icon icon-search"></router-link>
    </main-header>
    <div class="main-wrap">
      <v-scroll class="scroll-wrap">
        <div class="main">
          <ul class="notice-entry-list">
            <router-link :to="{name: noticeEntry.linktoRouterName}" tag="li"
              v-for="noticeEntry in noticeEntryList" :key="noticeEntry.iconClass"
            class="notice-entry">
              <i :class="noticeEntry.iconClass" class="icon">
                <span class="num">666</span>
              </i>
              <span class="desc">{{noticeEntry.desc}}</span>
              
            </router-link>
          </ul>
          <div class="personal-message-wrap">
            <header class="personal-message-header">
              <span class="desc">简信</span>
              <router-link :to="{name: 'searchUser'}"
                tag="span" class="new-personal-message">
                新简信
              </router-link>
            </header>
            <ul class="personal-message-list">
              <router-link :to="{name: 'personalMessage', params: {id: 1}}" tag="li" 
                v-for="n in 10" :key="n" class="personal-message-item">
                <router-link :to="{name: 'user', params:{id: 1}}" tag="img" :src="avatar" alt="" class="avatar"></router-link>
                <div class="detail">
                  <div class="info"><span class="username">有馬の日記</span><span class="time">1-25 00:00</span></div>
                  <div class="content">没有你的四月还是终究来了。</div>
                </div>
              </router-link>
            </ul>
          </div>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/main-header/main-header'
import Scroll from '@/components/scroll/scroll'
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      noticeEntryList: [
        {
          iconClass: 'icon-comment',
          desc: '评论',
          linktoRouterName: 'noticeComment'
        },
        {
          iconClass: 'icon-favorite',
          desc: '喜欢和赞',
          linktoRouterName: 'noticeFavorite'
        },
        {
          iconClass: 'icon-fllowed',
          desc: '关注',
          linktoRouterName: 'noticeFllow'
        }
      ]
    }
  },
  components: {
    'main-header': MainHeader,
    'v-scroll': Scroll
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.main-wrap {
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 0, .025);
  .scroll-wrap {
    height: 100%;
  }
}
.notice-entry-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: .25rem 0;
  background-color: white;
  .border1px(rgba(0, 0, 0, .1));
  .notice-entry {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .25rem 0;
    width: 32%;
    line-height: .5rem;
    .icon {
      position: relative;
      font-size: .4rem;
      color: @theme-color;
      .num {
        position: absolute;
        top: -.1rem;
        right: -.2rem;
        padding: .025rem .05rem;
        background-color: #ea6f5a;
        color: white;
        font-size: .1rem;
        border-radius: .1rem;
      }
    }
  }
}
.personal-message-wrap {
  margin-top: .25rem;
  background-color: white;
  .border1px(rgba(0, 0, 0, .1), 0);
  .personal-message-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .border1px(rgba(0, 0, 0, .1));
    .desc{
      padding: .25rem;
      color: #333;
    }
    .new-personal-message {
      padding: .25rem;
      color: @theme-color;
    }
  }
  .personal-message-list {
    padding: 0 .25rem;
    .personal-message-item {
      display: flex;
      align-items: center;
      padding: .25rem 0;
      .avatar {
        width: .75rem;
        height: .75rem;
        border-radius: 50%;
      }
      .detail {
        flex: 1;
        padding-left: .25rem;
        line-height: .4rem;
        .info {
          display: flex;
          justify-content: space-between;
          .time {color:rgba(0, 0, 0, .35)}
        }
        .content {color: rgba(0, 0, 0, .35)}
      }
    }
  }
}
</style>
