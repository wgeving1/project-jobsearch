import React, { Component } from 'react'
import { fetch } from './actions'
import { connect } from 'react-redux'

export const loginWrapper = WrappedComponent => {
  class LoginProcess extends Component {
    handleClick = (email, password) => {
      this.props.fetch(email, password)
    }
    render() {
      return <WrappedComponent login={this.handleClick} {...this.props} />
    }
  }
  return connect(mapDispatchToProps)(LoginProcess)
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (email, password) => {
      dispatch(fetch(email, password))
    }
  }
}
export default loginWrapper