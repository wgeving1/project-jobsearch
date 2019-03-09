import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import * as logoutActions from './actions'
import { connect } from 'react-redux'

class SignOut extends Component {
  componentDidMount() {
    this.props.logoutActions.logoutUser()
  }
  render() {
    const user = this.props.login

    if(!user || typeof user.userHandle === 'undefined')
      return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
    return null
  }
}

const mapStateToProps = state => {
  return {
    login: state.loginpage
  }
}

export default connect(mapStateToProps, [logoutActions])(SignOut)