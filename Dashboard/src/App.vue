<template>
  <div id="app">
    <app-header/>
    <app-body/>
    <app-footer/>
  </div>
</template>

<script>
  import appHeader from './components/layout/appHeader.vue'
  import appBody from './components/layout/appBody.vue'
  import appFooter from './components/layout/appFooter.vue'

  export default {
    name: 'app',
    components: {
      appHeader,
      appBody,
      appFooter
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
