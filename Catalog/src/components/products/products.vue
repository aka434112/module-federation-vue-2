<template>
  <div>
    <h1>Products</h1>
    <search placeholder="Search products"
      @search="searchTerm = $event" />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Inventory</th>
        </tr>
      </thead>
      <tbody v-if="pageProducts.length">
        <tr v-for="product in pageProducts" :key="product.id">
          <td>{{product.title}}</td>
          <td>{{product.price | currency('€')}}</td>
          <td>{{product.inventory}}</td>
          <td>
            <b-icon-cart-plus title="Add to Cart" role="button" v-if="!cart.includes(product.id)" @click="ADD_TO_CART(product.id)"/>
            <b-icon-cart-dash title="Remove from Cart" role="button" v-else @click="REMOVE_FROM_CART(product.id)"/>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr><td colspan="3">No records found</td></tr>
      </tbody>
    </table>
    <b-pagination align="right" size="md"
      :total-rows="totalRows" :per-page="pageSize" 
      v-model="pageNumber">
    </b-pagination>
  </div>
</template>

<script>
  import search from './../catalog/search.vue'
  import { mapState, mapActions, mapMutations } from 'vuex';

  export default {
    name: 'products',
    components: {
      search
    },
    data: () => {
      return {
        pageNumber: 1,
        pageSize: 5,
        totalRows: 0,
        searchTerm: ''
      }
    },
    async created() {
      await this.fetch_products();
      this.totalRows = this.products.length;
    },
    computed: {
      pageProducts: function() {
        const pageNumberIndex = this.pageNumber - 1;
        const searchTermClean = this.searchTerm.trim();
        
        let result = this.products.slice();

        result = result.filter(product => product.title.toUpperCase().includes(searchTermClean.toUpperCase()));

        this.totalRows = result.length;
        return result.slice(pageNumberIndex * this.pageSize, (pageNumberIndex + 1) * this.pageSize);
      },
      ...mapState([
        "cart",
        "products"
      ]),
    },
    methods: {
      ...mapMutations([
        "ADD_TO_CART",
        "REMOVE_FROM_CART"
      ]),
      ...mapActions([
        "fetch_products"
      ])
    }    
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 20px;
  }
  div {
    padding-top: 0px;
    margin-top: 0px;
  }
</style>