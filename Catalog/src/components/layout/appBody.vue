<template>
  <div class="container">
    <div class="row">
      <app-body-content />
    </div>
  </div>
</template>

<script>

import appBodyContent from './appBodyContent.vue'

  export default {
    name: 'appBody',
    components: {
      appBodyContent
    }
  }
</script>

<style scoped>
  .container {
    min-height: 400px;
  }
</style>