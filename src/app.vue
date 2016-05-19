<style src="github-markdown-css"></style>
<style src="./css/reset"></style>
<style src="./css/main"></style>

<template>
  <div class="app">
    <global-header></global-header>
    <router-view></router-view> 
  </div>
</template>

<script>
  import globalHeader from './components/global-header'
  import store from './vuex/store'

  export default {
    store,
    components: {
      globalHeader
    }
  }
</script>