<template>
  <div id="app">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody v-if="cart.length">
        <tr v-for="product in cart" :key="product">
          <td>{{products[product].title}}</td>
          <td>{{products[product].price | currency('€')}}</td>
          <td>
            <input type="number" min="1"/> 
            <b-icon-cart-dash title="Remove from Cart" role="button" @click="REMOVE_FROM_CART(product.id)"/>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr><td colspan="3">No items in the cart</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(["cart", "products"])
  },
  methods: {
    ...mapMutations(["REMOVE_FROM_CART"])
  }
}
</script>

<style lang="scss">

</style>
