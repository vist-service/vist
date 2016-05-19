export default {
  '/': {
    component: require('./views/home')
  },
  '/login/success/:token': {
    component: require('./views/login-success')
  },
  '/gist/:id': {
    component: require('./views/gist')
  }
}
