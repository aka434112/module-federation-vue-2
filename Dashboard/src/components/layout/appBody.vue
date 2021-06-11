<template>
  <div class="container">
    <div class="row">
      <app-sidebar class="col-sm-3"/>
      <app-body-content class="col-sm-9"/>
    </div>
  </div>
</template>

<script>

import appSidebar from './appSidebar.vue'
import appBodyContent from './appBodyContent.vue'

  export default {
    name: 'appBody',
    components: {
      appSidebar,
      appBodyContent
    }
  }
</script>

<style scoped>
  .container {
    min-height: 400px;
    margin: 10px 20px;
  }
</style>