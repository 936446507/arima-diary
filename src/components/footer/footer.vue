<template>
  <footer class="footer-wrap">
    <div class="footer">
      <ul class="footer-list nav-list">
        <li v-for="item in footerData" :key="item.linktoRouterName" class="item">
          <router-link :to="{name: item.linktoRouterName}" class="nav-router-link" exact>
            <i :class="item.iconClass" class="icon"></i>
            <span class="value">{{item.value}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      footerData: [
        {
          iconClass: 'icon-home',
          value: '首页',
          linktoRouterName: 'home'
        },
        {
          iconClass: 'icon-rank',
          value: '榜单',
          linktoRouterName: 'rank'
        },
        {
          iconClass: 'icon-notice',
          value: '消息',
          linktoRouterName: 'notice'
        },
        {
          iconClass: 'icon-self',
          value: '我的',
          linktoRouterName: 'self'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.footer-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-top: .1rem;
    box-shadow: 0 0 .1rem #999;
    background-color: white;
    .footer-list {
      display: flex;
      justify-content: center;
      align-content: center;
      .item {
        flex: 1;
        height: 0.8rem;
        text-align: center;
        line-height: .5rem;
        font-size: 0.1rem;
        .nav-router-link {
          display: flex;
          flex-direction: column;
          justify-content: flex-bottom;
          width: 100%;
          height: 100%;
          // padding: .1rem;
          color: @default-color;
          &.router-link-active {
              color: @router-color;
          }
          .icon {
              display: block;
              font-size: 0.4rem;
          }
          .value {
              font-size: 0.15rem;
          }
        }
        .login-router-link {
            display: inline-block;
            position: relative;
            border: none;
            width: 100%;
            height: 100%;
            padding: .1rem;
            color: white;
            font-size: .225rem;
            letter-spacing: .1rem;
            &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                width: 1px;
                height: 100%;
                background-color: white;
            }
        }
      }
      &.login-list {
          background-color: @router-color;
          opacity: .8;
          &>.item {
              padding: .15rem 0;
              line-height: 0.3rem;
              .icon, .value {
                  .to-inline(middle);
              }
          }
      }
    }
  }
}
</style>