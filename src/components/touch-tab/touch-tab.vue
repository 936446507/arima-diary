<template>
  <div class="touch-tab-wrap">
    <ul class="tab">
      <li v-for="(item, index) in tabItems" :key="item" 
        :class="{'active': tabCurIndex === index}" 
        @click.stop="selectTab(index)"  class="tab-item">
        {{item}}
      </li>
    </ul>
    <div class="tab-content-wrap">
      <div class="tab-content" ref="tabContent" :style="{height: contentH}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {getStyle, setStyle} from '@/js/style'
export default {
  props: {
    tabItems: {
      type: Array
    },
    defaultIndex: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      tabCurIndex: 0,
      contentH: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initTabStyle()
    })
  },
  methods: {
    _initTabStyle() {
      let tabContent = this.$refs.tabContent
      let tabContents = tabContent.children
      let tabContentLen = tabContents.length
      let tabcontentW = getStyle({dom: tabContents[0], attr: 'width', isReturnNumber: true})
      // 将父组件传值的默认index赋值给tabCurIndex
      this.tabCurIndex = this.defaultIndex
      // 设置tab-content-wrap宽度
      setStyle({
        dom: tabContent.parentElement,
        attr: 'width',
        value: tabcontentW * tabContentLen + 'px'
      })

      // 设置content的translate偏移量
      this.setTabContentTranslate()
      this.setTabContentH()
    },

    // 设置content的translate偏移量
    setTabContentTranslate() {
      let tabContents = this.$refs.tabContent.children
      let tabContentLen = tabContents.length
      let tabcontentW = getStyle({dom: tabContents[0], attr: 'width', isReturnNumber: true})
      let tabCurIndex = this.tabCurIndex
      tabContents[tabCurIndex].style.transform = 'translateX(0)'

      for (let i = 0; i < tabContentLen; i++) {
        tabContents[i].style.transform = `translateX(${(i - tabCurIndex) * tabcontentW}px)`
      }
    },

    // 设置tabContnet的高度
    setTabContentH() {
      let curTabContent = this.$refs.tabContent.children[this.tabCurIndex]
      this.contentH = getStyle({dom: curTabContent, attr: 'height'})
      console.log(getStyle({dom: curTabContent, attr: 'height'}))
      console.log(curTabContent.getBoundingClientRect())
    },
    // tab点击选择
    selectTab(curIndex) {
      this.tabCurIndex = curIndex
      this.setTabContentTranslate()
    },

    start(event) {
      console.log('start', event.touches)
    },
    move(event) {
      console.log('move', event.changedTouches)
    },
    end(event) {
      console.log('end', event.touches)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.tab {
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 5px #ccc;
  .tab-item {
    flex: 1;
    padding: .25rem 0;
    line-height: .35rem;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;
    &.active {
      color: @theme-color;
      border-bottom: 2px solid @theme-color;
    }
  }
}
.tab-content-wrap {
  position: relative;
  overflow: hidden;
  .tab-content {
    position: relative;
    overflow: hidden;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transition: all .5s ease-in-out;
    }
  }
}
</style>

