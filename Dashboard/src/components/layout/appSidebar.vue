<template>
  <div class="smallMargin">
    <div class="list-group">
      <router-link class="list-group-item" to="/products">Products</router-link>
      <router-link class="list-group-item" to="/cart">Cart</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appSidebar'
  }
</script>

<style scoped>
  .smallMargin {
    margin-top: 25px;
  }
</style>