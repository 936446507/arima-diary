<template>
  <div class="steps-wrap">
    <ul class="step-list">
      <li v-for="n in 2" :key="n" class="step">
        <div class="avatar-wrap">
          <img :src="avatar" alt="avatar">
        </div>
        <div class="content-wrap">
          <div class="header">
            <span class="user">桐山零</span>
            <span class="type">喜欢</span>了
            <span class="subject">文章</span>
            <router-link :to="{name: 'diary', params: {id: 1}}" tag="span" class="thing">
              有馬の日記
            </router-link>
          </div>
          <div class="detail">有馬の日記有馬の日記有馬の日記有馬の日記有馬の日記</div>
          <div class="time">2018.01.18 20:46</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: require('@/assets/images/logo.jpg')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.steps-wrap {padding: 0 .25rem;}
.step-list {
  position: relative;
  padding: .5rem 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: .25rem;
    width: .05rem;
    height: 100%;
    background-color: rgba(0, 0, 0, .1);
  }
  .step {
    position: relative;
    margin-top: .5rem;
    &:first-child {margin: 0}
    .avatar-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
      img {
        .setImg(100%, 50%);
      }
    }
    .content-wrap {
      position: relative;
      padding: .25rem;
      margin-left: .85rem;
      border-radius: .1rem;
      background-color: white;
      box-shadow: 0 3px 0 #d7e4ed;
      &::before {
        content: '';
        position: absolute;
        top: .15rem;
        right: 100%;
        height: 0;
        width: 0;
        border: .15rem solid transparent;
        border-right: .15rem solid white;
      }
      .header .thing {color: @router-color}
      .detail {
        padding: .15rem 0;
        color: #999;
      }
      .time {
        padding-top: .15rem;
        color: #999;
      }
    }
  }
}
</style>

