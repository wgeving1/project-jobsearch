import { registerNewUser, recoverMyPassword } from '../../commands/users'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class RegisterController {
  constructor(router) {
    router.post('/register', wrapAsyncFunc(this.registerUser))
    // router.get('/recover/:email', wrapAsyncFunc(this.recoverPassword))
  }
  async registerUser(req, res) {
    const { email, firstName, surname, username, confirmedPassword, password} = req.body
    const results = await registerNewUser({ email, firstName, surname, username, confirmedPassword, password})
    res.send(results)
  }
  async recoverPassword(req, res) {
    const { email } = req.body
    const results = await recoverMyPassword({ email })
    res.send(results)
  }
}