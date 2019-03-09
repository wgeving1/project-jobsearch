import { all } from 'redux-saga/effects'

import LoginPageSagas from '../ui/unsecure/login/actions'
import RecoverPageSagas from '../ui/unsecure/recover/actions'
import RegisterPageSagas from '../ui/unsecure/register/actions'

export default function* root() {
  let sagas = []
    .concat(LoginPageSagas)
    .concat(RecoverPageSagas)
    .concat(RegisterPageSagas)
  yield all(sagas)
}