import { authenticateLogin } from '../../commands/auth'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class AuthController {
  constructor(router) {
    router.post('/login', wrapAsyncFunc(this.login))
    router.get('/jwt/login', wrapAsyncFunc(this.loginByJwt))
    router.post('/recover', wrapAsyncFunc(this.recover))
    router.put('/logout', wrapAsyncFunc(this.logout))
  }
  async login(req, res) {
    const { email, password } = req.body
    const results = await authenticateLogin(email, password)
    res.send(results)
  }
  async loginByJwt(req, res) {
    const token = req.user
    res.send({
      user: {
        firstName: token.firstName, 
        surname: token.surname, 
        userHandle: token.userHandle, 
        username: token.username, 
        email: token.email, 
        joinedDate: token.joinedDate
      }
    })
  }
  async recover(req, res) {
    const { email } = req.body
    res.sendStatus(200)
  }
  async logout(req, res) {
    res.send({})
  }
}