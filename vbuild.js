import path from 'path'

const eslint = {
  globals: [
    'window',
    'location',
    'localStorage',
    'hljs'
  ]
}

export default {
  title: 'Vist',
  port: 3888,
  template: './src/template.hbs',
  eslint,
  webpack(config, options) {
    setAlias(config)
  }
}

function cwd(...args) {
  return path.join(process.cwd(), ...args)
}

function setAlias(config) {
  config.resolve.alias = {
    components: cwd('src/components'),
    utils: cwd('src/utils'),
    actions: cwd('src/vuex/actions'),
    types: cwd('src/vuex/mutation-types'),
    store: cwd('src/vuex/store'),
    helpers: cwd('src/helpers')
  }
}
