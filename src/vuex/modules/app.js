import {
  SET_ACCESS_TOKEN
} from 'types'

const state = {
  accessToken: localStorage.getItem('vist:token')
}

const mutations = {
  [SET_ACCESS_TOKEN](state, token) {
    state.accessToken = token
  }
}

export default {
  state,
  mutations
}
