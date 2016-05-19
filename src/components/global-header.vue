<style scoped>
  .header {
    border-bottom: 1px solid #cfd8dc;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    background-color: white;
    & a {
      border-bottom: 2px solid transparent;
      display: inline-block;
      color: #737373;
      transition: border-bottom .3s ease;
      &:hover {
        color: #333;
        border-color: #333;
        height: 43px;
      }
    }
    & ul {
      list-style-type: none;
      padding-left: 0;
    }
  }

  .site-name {
    font-size: 1.2rem;
    & a {
      color: #333;
      display: inline-block;
    }
  }
</style>

<template>
  <header class="header">
    <div class="container">
      <div class="fl">
        <h1 class="site-name">
        <a v-link="{path: '/'}">Vist</a>
      </h1>
      </div>
      <ul class="fr header-nav" v-if="!token">
        <li class="header-nav-item">
          <a :href="loginURL">
            <i class="fa fa-github"></i>
            Login with GitHub
          </a>
        </li>
      </ul>
      <ul class="fr header-nav" v-if="me">
        <li class="header-nav-item">
          <a v-link="{path: '/user/' + me.login}">{{ me.name }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import {loginURL, qsCache} from 'utils'

  export default {
    vuex: {
      getters: {
        token: state => state.app.accessToken,
        me: state => state.user.me
      }
    },
    data() {
      return {
        loginURL
      }
    },
    created() {
    }
  }
</script>