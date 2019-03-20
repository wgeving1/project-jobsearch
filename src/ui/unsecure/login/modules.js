import loginWrapper from './login-process'
 import AutoLoginOrRedirectProcess from './jwt-verification'

export const Login = loginWrapper
export const AutoLoginOrRedirect = AutoLoginOrRedirectProcess

export default {
  Login,
  AutoLoginOrRedirect
}