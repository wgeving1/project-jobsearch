import { combineReducers } from 'redux'
import { selector as users } from '../../state/entities/users/reducers'
import LOGOUT_TYPES from '../processes/auth/logout/types'

const appReducer = combineReducers({
  users
})

export default (state, action) => {
  if(action.type ===LOGOUT_TYPES.LOGOUT_USER_SUCCESS) {
    state = undefined
  }
  return appReducer(state, action)
}