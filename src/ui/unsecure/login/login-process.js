import React, { Component } from 'react'
import * as loginActions from './actions'
import { connect } from 'react-redux'

export const loginWrapper = WrappedComponent => {
  class LoginProcess extends Component {
    handleClick = (email, password) => {
      this.props.loginActions.fetch(email, password)
    }
    render() {
      return <WrappedComponent login={this.handleClick} {...this.props} />
    }
  }
  return connect([], [loginActions])(LoginProcess)
}
export default loginWrapper