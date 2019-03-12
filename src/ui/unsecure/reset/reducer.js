import RESET_TYPES from './types'

import loginUser from '../login/reducer'

export const initialState = {
  active: {
    admin: false
  }, 
  loading: false
}

const resetPassword = (state = initialState, { user }) => ({
  ...state, 
  loading: true, 
  active: {
    ...user
  }
})

const handlers = {
  [RESET_TYPES.RESET_USER_PASSWORD_REQUEST]: resetPassword,
  [RESET_TYPES.RESET_USER_PASSWORD_SUCCESS]: loginUser
}

export default function(state = initialState, action = {}) {
  return handlers[action.type] ? handlers[action.type](state, action) : state
}

export const selector = {
  name: 'reset', 
  select(state) {
    return state.reset
  }
}