import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import * as logoutActions from '../../../state/processes/auth/logout/actions'
import connected from '../../../state/setup/connect'
import { selector as users } from '../../../state/entities/users/reducers'

class SignOut extends Component {
  componentDidMount() {
    this.props.logoutActions.logoutUser()
  }
  render() {
    const user = users.active

    if(!user || typeof user.userHandle === 'undefined')
      return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
    return null
  }
}

export default connected([users], [logoutActions])(SignOut)