<template>
  <div class="smallMargin">
    <div class="list-group">
      <router-link class="list-group-item" to="/products">Products</router-link>
      <router-link class="list-group-item" to="/cart">Cart ({{ items_in_cart }})</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appSidebar',
    computed: {
      items_in_cart() {
        const cart = this.$store.state.cart;
        return Object.keys(cart).filter(product => cart[product]).length;
      }
    }
  }
</script>

<style scoped>
  .smallMargin {
    margin-top: 25px;
  }
</style>