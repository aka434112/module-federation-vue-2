<template>
  <div class="col-lg-9 card">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'appBodyContent'
  }
</script>

<style scoped>
  div {
    margin-top: 25px;
    padding-top: 25px;
    margin-bottom: 30px;
  }
</style>