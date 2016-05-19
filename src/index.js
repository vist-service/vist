import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTimeago from 'vue-timeago'
import app from './app'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueTimeago, {
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})

const router = new VueRouter()
router.map(routes)

router.start(app, 'app')
