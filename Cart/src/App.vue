<template>
  <div id="app">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Required Qty.</th>
        </tr>
      </thead>
      <tbody v-if="cart.length">
        <tr v-for="product in cart" :key="product">
          <td>{{product_details[product].title}}</td>
          <td>{{product_details[product].price | currency('€')}}</td>
          <td>
            <input type="number" min="1" value="1"/> 
            <b-icon-cart-dash title="Remove from Cart" role="button" @click="REMOVE_FROM_CART(product)"/>
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
    ...mapState(["cart", "products"]),
    product_details() {
      const product_details = {};
      for(let product of this.products) {
        if(this.cart.includes(product.id)) 
          product_details[product.id] = product;
      }
      return product_details;
    }
  },
  methods: {
    ...mapMutations(["REMOVE_FROM_CART"])
  }
}
</script>

<style lang="scss">

</style>
