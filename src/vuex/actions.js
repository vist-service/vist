import store from 'store'
import * as types from 'types'
import {api} from 'utils'
import parseLinkHeader from 'parse-link-header'

export async function fetchUserProfile({dispatch}, token) {
  const profile = await api.get('/user', {
    params: {
      access_token: token // eslint-disable-line
    }
  })
  dispatch(types.FETCH_USER_PROFILE, profile.data)
}

export async function fetchUserGists({dispatch}, page) {
  dispatch(types.SET_USER_GISTS_PAGE, parseInt(page, 10))
  dispatch(types.START_FETCHING_USER_GISTS)
  const gists = await api.get('/gists', {
    params: store.state.user.gistsOptions
  })
  dispatch(types.SET_USER_GISTS_PAGINATION, parseLinkHeader(gists.headers.link))
  dispatch(types.DONE_FETCHING_USER_GISTS, gists.data)
}
