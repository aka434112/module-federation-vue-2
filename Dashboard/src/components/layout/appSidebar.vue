<template>
  <div class="smallMargin">
    <div class="list-group">
      <router-link class="list-group-item" to="/products">Products</router-link>
      <router-link class="list-group-item" to="/cart">Cart ({{ items_in_cart }})</router-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'appSidebar',
    computed: {
      ...mapState(["cart"]),
      items_in_cart() {
        return Object.keys(this.cart).filter(product => this.cart[product]).length;
      }
    },
    created() {
      setInterval(() => {
        console.log(Object.keys(this.cart));
      }, 10000)
    }
  }
</script>

<style scoped>
  .smallMargin {
    margin-top: 25px;
  }
</style>