import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from './api'
import TYPES from './types'
import LocalStorage from '../../../utilities/local-storage'

export const name = 'resetActions'

export function resetPassword({ email 
  }) {
  return {
    type: TYPES.RESET_USER_PASSWORD_REQUEST,
    email
  }
}

export function* executeResetPassword({ email }) {
  const url = api.resetPassword.formatUrl()
  const body = api.resetPassword.serialize(email)
  try {
    LocalStorage.remove()
    const res = yield call(api.resetPassword.request, url, body)
    LocalStorage.set(res.data.token)
    yield put(resetPassSuccess(res.data))
  } catch (err) {
    console.error('Request failed with', err)
    yield put(resetPassFailure())
  }
}

export function resetPassSuccess(data) {
  return {
    type: TYPES.RESET_USER_PASSWORD_SUCCESS,
    user: data.user,
    admin: data.admin
  }
}

export function resetPassFailure() {
  return {
    type: TYPES.RESET_USER_PASSWORD_FAILURE
  }
}

const sagas = [
  takeLatest(TYPES.RESET_USER_PASSWORD_REQUEST, executeResetPassword)
]

export default sagas

