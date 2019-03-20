import LOGIN_TYPES from './types'

export const initialState = {
  active: {
    admin: false
  }, 
  loading: false
}

const fetchingUserData = (state = initialState) => ({
  ...state, 
  loading: true
})

const loginUser = (state = initialState, { user, admin }) => ({
  ...state, 
  loading: false, 
  active: {
    ...user, 
    admin
  }
})

const handlers = {
  [LOGIN_TYPES.FETCH_USER_TOKEN_REQUEST]: fetchingUserData, 
  [LOGIN_TYPES.FETCH_USER_TOKEN_SUCCESS]: loginUser
}

export default function (state = initialState, action = {}) {
  return handlers[action.type] ? handlers[action.type](state, action) : state
}

export const selector = {
  name: 'login', 
  select(state) {
    return state.login
  }
}