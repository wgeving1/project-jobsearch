import * as axiosWrapper from '../../../utilities/axios-utils'

export const registerUser = {
  formatUrl: () => `/users/register`, 
  request: (url, body) => axiosWrapper.post(url, body),
  serialize: (email, 
    username, 
    password, 
    confirmedPassword, 
    firstName,
    surname) => ({ email, 
      username, 
      password, 
      confirmedPassword, 
      firstName, 
      surname })
}