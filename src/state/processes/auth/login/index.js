import LoginProcess from './login-process'
import JWTVerify from './jwt-verification'

export const Login = LoginProcess
export const AutoLoginOrRedirect = JWTVerify

export default {
  Login, 
  AutoLoginOrRedirect
}