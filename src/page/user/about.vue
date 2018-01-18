<template>
  <div class="about-wrap">
    <div class="about">
      <div v-for="aboutItem in aboutDatas" :key="aboutItem.title" class="about-item">
        <header class="title">{{aboutItem.title}}</header>
        <ul class="list">
          <li v-for="listItem in aboutItem.listDatas" 
            :key="listItem.subTitle" class="item">
            {{listItem.subTitle}}：{{listItem.subContent}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    aboutDatas: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  padding: .25rem;
  .about-item {
    .title {
      position: relative;
      padding: 0 .25rem;
      color: #333;
      font-size: .3rem;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: .08rem;
        height: 100%;
        background-color: rgba(0, 0, 0, .1);
      }
    }
    .list {
      padding: .25rem 0;
      .item {
        padding: .1rem 0;
      }
    }
  }
}
</style>

