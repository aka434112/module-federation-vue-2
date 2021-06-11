<template>
  <div id="app">
    <app-body/>
  </div>
</template>

<script>
  import appBody from './components/layout/appBody.vue'

  export default {
    name: 'app',
    components: {
      appBody
    }
  }
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
