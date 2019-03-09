// import { StatisticLabel } from "semantic-ui-react";
import RECOVER_TYPES from './types'

import loginUser from '../login/reducer'

export const initialState = {
  active: {
    admin: false
  }, 
  loading: false
}

const recoverPassword = (state = initialState, { user }) => ({
  ...state, 
  loading: true, 
  active: {
    ...user
  }
})

const handlers = {
  [RECOVER_TYPES.RECOVER_USER_PASSWORD_REQUEST]: recoverPassword,
  [RECOVER_TYPES.RECOVER_USER_PASSWORD_SUCCESS]: loginUser
}

export default function(state = initialState, action = {}) {
  return handlers[action.type] ? handlers[action.type](state, action) : state
}

export const selector = {
  name: 'recovery', 
  select(state) {
    return state.recovery
  }
}