import {
  FETCH_USER_PROFILE,
  FETCH_USER_GISTS,
  START_FETCHING_USER_GISTS,
  DONE_FETCHING_USER_GISTS,
  SET_USER_GISTS_PAGINATION,
  SET_USER_GISTS_PAGE
} from 'types'

const state = {
  me: JSON.parse(localStorage.getItem('vist:me')),
  gists: [],
  gistsOptions: {
    page: 1,
    per_page: 10
  },
  pagination: null,
  loadingGists: false
}

const mutations = {
  [FETCH_USER_PROFILE](state, profile) {
    state.me = profile
    localStorage.setItem('vist:me', JSON.stringify(profile))
  },
  [DONE_FETCHING_USER_GISTS](state, gists) {
    state.loadingGists = false
    state.gists = gists
  },
  [START_FETCHING_USER_GISTS](state) {
    state.loadingGists = true
  },
  [SET_USER_GISTS_PAGINATION](state, pagination) {
    state.pagination = pagination
  },
  [SET_USER_GISTS_PAGE](state, page) {
    state.gistsOptions.page = page
  }
}

export default {
  state,
  mutations
}