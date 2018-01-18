<template>
  <div class="editor-wrap">
    <v-header>
      <button slot="tools" class="finisth-btn">发表</button>
    </v-header>
    <div class="editor">
      <div class="title-input-wrap">
        <input class="title-input" type="text" placeholder="输入你的标题吧~">
      </div>
      <div class="editor-content-wrap">
        <mavon-editor @change="change"
          v-model="value" :toolbars="toolbars" :toolbarsFlag="true" 
          :subfield="false" :ishljs="true" default_open="edit"
          placeholder="赶紧记录你的日记吧~" :style="{'height': '100%'}">
        </mavon-editor>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  data() {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: false, // 下划线
        strikethrough: false, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: false, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: false, // 单双栏模式
        preview: true // 预览
      },
      value: ''
    }
  },
  methods: {
    change(value, render) {
      // value -> markdown
      // render -> html
      console.log(value, render)
    }
  },
  components: {
    'v-header': Header,
    'mavon-editor': mavonEditor
  }
}
</script>

<style lang="less" scoped>
@import '../../style/common.less';
.finisth-btn {
  padding: .1rem .25rem;
  background-color: white;
}
.editor {
  position: fixed;
  top: 1rem;
  bottom: 0;
  width: 100%;
  padding: .25rem 0;
  .title-input-wrap {
    padding: .25rem 0;
    .title-input {
      font-size: .3rem;
      padding: 0 .1rem;
    }
  }
  .editor-content-wrap {
    height: 100%;
  }
}
</style>
