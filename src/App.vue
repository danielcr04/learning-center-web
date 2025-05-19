<script>
import ToolbarContent from "./public/components/toolbar-content.component.vue";

export default {
  name: 'App',
  components: {ToolbarContent}
}
</script>

<template>
  <toolbar-content/>
  <router-view/>
</template>

<style scoped>

</style>