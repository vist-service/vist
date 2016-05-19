import axios from 'axios'
import store from 'store'

const isDev = process.env === 'development'

const loginURL = isDev
  ? 'http://localhost:3789/login'
  : 'http://vist-api.egoistian.com/login'

function qs(key, value) {
  const search = location.search && location.search.substr(1)
  const result = {}
  for (const pattern of search.split('&')) {
    if (pattern) {
      const key = pattern.split('=')[0]
      const value = pattern.split('=')[1]
      result[key] = value
    }
  }
  if (key && !value) {
    return result[key]
  }
  if (key && value) {
    result[key] = value
    return qsStringify(result)
  }
  return result
}

function qsStringify(obj) {
  const res = Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&')
  return `?${res}`
}

const qsCache = qs()

const api = axios.create({
  baseURL: `https://api.github.com`,
  params: {
    access_token: store.state.app.accessToken // eslint-disable-line
  }
})

export {
  isDev,
  loginURL,
  qs,
  qsCache,
  api
}
