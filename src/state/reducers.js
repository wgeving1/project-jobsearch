import { combineReducers } from 'redux'

import recoverpage from '../ui/unsecure/recover/reducer'
import registerpage from '../ui/unsecure/register/reducer'
import resetpage from '../ui/unsecure/reset/reducer'
import loginpage from '../ui/unsecure/login/reducer'

const appReducer = combineReducers({
  recoverpage, 
  registerpage,
  resetpage, 
  loginpage
})

export default (state, action) => {
  if (action.type === 'RESET_ALL_DATA_SUCCESS') {
    state = undefined
  }
  return appReducer(state, action)
}