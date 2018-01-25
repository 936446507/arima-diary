<template>
  <div class="wrapper">
    <div class="self-wrap">
      <div class="self">
        <!-- 头部栏 -->
        <header class="self-header-wrap">
          <div class="self-header">
            <div class="avatar"><img :src="avatar" alt=""></div>
            <div class="self-info-wrap">
              <div class="self-info">
                <div class="name">有馬の日記</div>
                <div class="sex-icon" :class="sex"><i class="icon" :class="'icon-' + sex"></i></div>
              </div>
              <div class="sign">没有你的四月还是终究来了。</div>
            </div>
          </div>
          <ul class="header-meta-list">
            <li class="meta">
              <span class="title">关注</span><span class="number">666</span>
            </li>
            <li class="meta">
              <span class="title">粉丝</span><span class="number">666</span>
            </li>
          </ul>
        </header>
        <main class="main-list-wrap">
          <ul class="list">
            <li class="item">
              <i class="icon icon-edit"></i><span>写日记</span>
            </li>
          </ul>
          <ul class="main-list list">
            <router-link v-for="item in mainList" :key="item.desc" 
              :to="{name: item.linkRouterName}" class="item" tag="li">
              <i :class="item.iconClass" class="icon"></i>
              <span class="desc">{{item.desc}}</span>
            </router-link>
          </ul>
          <ul class="other-list list">
            <router-link v-for="item in otherList" :key="item.desc" 
              :to="{name: item.linkRouterName}" class="item" tag="li">
              <i :class="item.iconClass" class="icon"></i>
              <span class="desc">{{item.desc}}</span>
            </router-link>
          </ul>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg'),
      sex: 'man',
      mainList: [
        {
          iconClass: 'icon-diary',
          desc: '我的日记',
          linkRouterName: 'myDiary'
        },
        {
          iconClass: 'icon-favorite',
          desc: '我的喜欢',
          linkRouterName: 'myFavorite'
        }
      ],
      otherList: [
        {
          iconClass: 'icon-set',
          desc: '设置',
          linkRouterName: 'setting'
        },
        {
          iconClass: 'icon-share',
          desc: '分享',
          linkRouterName: ''
        },
        {
          iconClass: 'icon-rate',
          desc: '评分',
          linkRouterName: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.self {
    background-color: rgba(0, 0, 0, .05);
    .self-header-wrap {
      background-color: white;
    }
}
.self-header {
  display: flex;
  padding: .25rem;
  .avatar {
    width: 15%;
    img {
      .setImg(100%, 50%)
    }
  }
  .self-info-wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: .35rem;
    .self-info {
      display: flex;
      align-items: center;
      .name {
        font-size: .5rem;
      }
      .sex-icon {
        color: white
      }
    }
    .sign {
      color: #999;
    }
  }
}
.header-meta-list {
  display: flex;
  justify-content: space-around;
  padding-bottom: .25rem;
  .border1px(rgba(0, 0, 0, .35));
  .meta {
    width: 100%;
    text-align: center;
    font-size: .3rem;
    &:first-child {
      .border1pxVertical(rgba(0, 0, 0, .35)) 
    }
    .title {color: rgba(0, 0, 0, .35)}
    .number {
      padding-left: .15rem;
      color: #333;
    }
  }
}
.main-list-wrap {
  margin-bottom: .25rem;
  .list {
    margin-top: .15rem;
    background-color: white;
    .item {
      display: flex;
      align-items: center;
      &:last-child .desc {
          .border1px(transparent)
        }
      .icon {
        padding: .25rem;
        color: #4FB0C6;
        // color: #ea6f5a;
        // &.icon-diary {color: #519D9E}
        // &.icon-favorite {color: #ea6f5a}
        // &.icon-set {color: #77919d}
        // &.icon-share {}        
        // &.icon-back {}
        // &.icon-rate {color: #FFBC42}
      }
      .desc {
        flex: 1;
        padding: .25rem 0;
        color: #333;
        font-size: .3rem;
        .border1px(rgba(0, 0, 0, .35));
      }
    }
  }
}
</style>
