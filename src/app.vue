<style src="github-markdown-css"></style>
<style src="./css/reset"></style>
<style src="./css/main"></style>

<template>
  <div class="app">
    <global-header></global-header>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script>
  import globalHeader from 'components/global-header'
  import globalFooter from 'components/global-footer'
  import store from 'store'

  export default {
    store,
    components: {
      globalHeader,
      globalFooter
    }
  }
</script>