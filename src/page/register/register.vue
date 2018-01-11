<template>
  <div class="wrapper">
    <v-header arrow-color="white" background="transparent"></v-header>
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
        <button class="register-btn">注册</button>
      </div>
    </main>
    <footer class="footer">已有账号，<span class="desc">立即登录</span></footer>
  </div>
</template>

<script>
import Header from '@/components/header/header'
export default {
  data() {
    return {
      logo: require('../../assets/images/logo.jpg')
    }
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  padding: .5rem 0;
  background-color: @theme-color;
  .name {
    padding-bottom: .5rem;
    color: white;
    font-size: .5rem;
  }
  .logo {
    width: 22%;
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
    .register-btn {
      width: 100%;
      margin: .25rem 0;
      padding: .25rem 0;
      color: white;
      text-align: center;
      background-color: @theme-color;
      border-radius: .5rem;
      font-size: .3rem;
    }
  }
}
.footer {
  width: 100%;
  padding: .25rem 0;
  text-align: center;
  color: #333;
  font-size: .3rem;
  .desc {color: @theme-color}
}
</style>

