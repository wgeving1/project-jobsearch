import REGISTER_TYPES from './types'

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
  [REGISTER_TYPES.REGISTER_USER_REQUEST]: fetchingUserData,
  [REGISTER_TYPES.REGISTER_USER_SUCCESS]: loginUser
}

export default function (state = initialState, action = {}) {
  return handlers[action.type] ? handlers[action.type](state, action) : state
}

export const selector = {
  name: 'register', 
  select(state) {
    return state.register
  }
}