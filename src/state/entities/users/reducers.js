import LOGIN_TYPES from '../../processes/auth/login/types'
import REGISTER_TYPES from '../../processes/register/types'
import RECOVER_TYPES from '../../processes/auth/recover'

export const initialState = {
  active: {
    admin: false
  }, 
  entities: [],
  loading: false
}

const fetchingUserData = (state) => ({
  ...state, 
  loading: true
})

const loginUser = (state, { admin, user }) => ({
  ...state, 
  loading: false, 
  active: {
    ...user, 
    admin
  }
})

const recoverPassword = (state, { user }) => ({
  ...state, 
  loading: true,
  active: {
    ...user
  }
})

const handlers = {
  [LOGIN_TYPES.FETCH_USER_TOKEN_REQUEST]: fetchingUserData, 
  [LOGIN_TYPES.FETCH_USER_TOKEN_SUCCESS]: loginUser,
  [REGISTER_TYPES.REGISTER_USER_REQUEST]: fetchingUserData,
  [REGISTER_TYPES.REGISTER_USER_SUCCESS]: loginUser,
  [RECOVER_TYPES.RECOVER_USER_PASSWORD_REQUEST]: recoverPassword
}

export default function(state = initialState, action = {}) {
  return handlers[action.type] ? handlers[action.type](state, action) : state
}

export const selector ={
  name: 'users', 
  select(state) {
    return state.users
  }
}