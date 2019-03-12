import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from './api'
import TYPES from './types'
import LocalStorage from '../../../utilities/local-storage'

export const name = 'registerActions'

export function registerUser({ email, 
  username, 
  password, 
  confirmedPassword, 
  firstName, 
  surname, 
  }) {
  return {
    type: TYPES.REGISTER_USER_REQUEST,
    email, 
    username, 
    password,
    confirmedPassword, 
    firstName, 
    surname
  }
}

export function* executeRegisterUser({ email,
  username, 
  password, 
  confirmedPassword, 
  firstName, 
  surname }) {
  const url = api.registerUser.formatUrl()
  const body = api.registerUser.serialize(email,
    username,
    password, 
    confirmedPassword,
    firstName, 
    surname)
  try {
    LocalStorage.remove()
    const res = yield call(api.registerUser.request, url, body)
    LocalStorage.set(res.data.token)
    yield put(registerUserSuccess(res.data))
  } catch (err) {
    console.error('Request failed with', err)
    yield put(registerUserFailure())
  }
}

export function registerUserSuccess(data) {
  return {
    type: TYPES.REGISTER_USER_SUCCESS,
    user: data.user,
    admin: data.admin
  }
}

export function registerUserFailure() {
  return {
    type: TYPES.REGISTER_USER_FAILURE
  }
}

const sagas = [
  takeLatest(TYPES.REGISTER_USER_REQUEST, executeRegisterUser)
]

export default sagas

