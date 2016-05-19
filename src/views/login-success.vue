<template>
  <div class="view-login-success">
    <div class="container">
      <div class="wrap">
        <div class="box inner single-box">
          Success!
          <div class="message" v-if="fetching">
            Fetching your profile...
          </div>
          <div class="message" v-if="redirecting">
            Redirecting to homepage...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {qs} from 'utils'
  import {fetchUserProfile} from 'actions'

  export default {
    vuex: {
      actions: {
        fetchUserProfile
      }
    },
    data() {
      return {
        fetching: false,
        redirecting: false
      }
    },
    async ready() {
      const token = this.$route.params.token
      localStorage.setItem('vist:token', token)
      this.fetching = true
      await this.fetchUserProfile(token)
      this.redirecting = true
      setTimeout(() => {
        location.href = '/'
      }, 300)
    }
  }
</script>