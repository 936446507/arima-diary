<template>
  <div class="wrapper">
    <v-header class="header-tool" arrowColor="white" background="transparent"></v-header>
    <div class="login-wrap">
      <v-scroll class="scroll-wrap">
        <div class="login">
          <header class="header">
            <div class="name">有馬の日記</div>
            <div class="logo"><img :src="logo" alt=""></div>
          </header>
          <main class="main">
            <div class="form">
              <div class="form-item username">
                <i class="icon"></i>
                <input type="text" class="input username-input" placeholder="请输入用户名">
              </div>
              <div class="form-item password">
                <i class="icon"></i>
                <input type="text" class="input password-input" placeholder="请输入密码">
              </div>
              <button class="login-btn">登录</button>
              <ul class="tool-list">
                <li class="tool">忘记密码？</li>
                <li class="tool">注册</li>
              </ul>
            </div>
          </main>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'
export default {
  data() {
    return {
      logo: require('../../assets/images/logo.jpg')
    }
  },
  components: {
    'v-header': Header,
    'v-scroll': Scroll
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.header-tool::before {
  height: 0 !important;
}
.login-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  .scroll-wrap {
    height: 100%;
  }
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  padding: .75rem 0;
  background-color: @theme-color;
  .name {
    padding-bottom: .5rem;
    color: white;
    font-size: .5rem;
  }
  .logo {
    width: 25%;
    img {
      .setImg(100%, 50%);
    }
  }
}
.main {
  padding: .75rem .25rem;
  .form {
    .form-item {
      padding: .25rem 0;
      .input {
        font-size: .3rem;
      }
    }
    .login-btn {
      width: 100%;
      margin: .25rem 0;
      padding: .25rem 0;
      color: white;
      text-align: center;
      background-color: @theme-color;
      border-radius: .5rem;
      font-size: .3rem;
    }
    .tool-list {
      display: flex;
      justify-content: space-between;
      color: #ccc;
      font-size: .3rem;
    }
  }
}
</style>

