import LoginProcess from './login-process'
import AutoLoginOrRedirect from './jwt-verification'

export const Login = LoginProcess
export const AutoLoginOrRedirect = AutoLoginOrRedirectProcess

export default {
  Login, 
  AutoLoginOrRedirect
}