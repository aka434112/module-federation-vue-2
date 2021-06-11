<template>
  <div class="card">
    <router-view></router-view>
  </div>
</template>

<script>
  import appSidebar from './appSidebar.vue'
  export default {
    name: 'appBodyContent',
    components: {
      appSidebar
    }
  }
</script>

<style scoped>
  div {
    margin-top: 25px;
    padding-top: 25px;
  }
</style>