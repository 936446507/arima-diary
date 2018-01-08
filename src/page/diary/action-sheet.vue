<template>
  <action-sheet v-model="actionsSheetStatus" :menus="menus">
    <header slot="header"></header>
  </action-sheet>
</template>

<script>
import {actionSheet} from 'vux'
export default {
  props: {
    actionsSheetStatus: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Object
    }
  },
  components: {
    'action-sheet': actionSheet
  }
}
</script>

<style>

</style>
