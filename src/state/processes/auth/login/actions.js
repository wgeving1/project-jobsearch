import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from './api'
import TYPES from './types'
import LocalStorage from '../../../../utilities/local-storage'

export const name = 'loginActions'

export function fetch(email, password) {
  return {
    type: TYPES.FETCH_USER_TOKEN_REQUEST,
    email, 
    password
  }
}
export function* executeFetchToken({ email, password }) {
  const url = api.fetch.formatUrl()
  const body = api.fetch.serialize(email, password)
  try {
    const res = yield call(api.fetch.request, url, body)
    LocalStorage.set(res.data.token)
    yield put(fetchSuccess(res.data))
  } catch(res) {
    console.error('Request failed with', res.error)
  }
}
export function fetchSuccess(data) {
  return {
    type: TYPES.FETCH_USER_TOKEN_SUCCESS,
    user: data.user, 
    admin: data.admin
  }
}
export function fetchUSerByJWT() {
  return {
    type: TYPES.FETCH_USER_BY_JWT
  }
}
export function* executeFetchUserByJWT() {
  const url = api.fetchByJWT.formatUrl()
  try {
    const res = yield call(api.fetchByJWT.request, url)
    yield put(fetchSuccess(res.data))
  } catch (res) {
    console.error('Request failed with', res.error)
  }
}
const sagas = [
  takeLatest(TYPES.FETCH_USER_TOKEN_REQUEST, executeFetchToken),
  takeLatest(TYPES.FETCH_USER_BY_JWT, executeFetchUserByJWT)
]
export default sagas