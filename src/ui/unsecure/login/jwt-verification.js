import React, { Component } from 'react'
import jwt from 'jsonwebtoken'
import { Redirect, withRouter } from 'react-router-dom'

import * as loginActions from './actions'
import { connect } from 'react-redux'
import { selector as users } from '../../../../state/entities/users/reducers'
import authToken from '../../../../utilities/local-storage'
import { unsecuredRoutes } from '../../../../ui/index'

const AutoLoginOrRedirect = WrappedComponent => {
  class JWTVerify extends Component {
    constructor(props) {
      super(props)
      this.state = {
        fetching: true, 
        loading: false
      }
    }
    componentDidMount() {
      const token = authToken.get()
      const user = this.props.users.active
      if(token && !user.userHandle) {
        const decoded = jwt.decode(token)
        const currentTime = (new Date().getTime()) / 1000
        if(decoded.exp < currentTime) {
          authToken.remove()
          this.setState({ fetching: false, loading: true })
        } else {
          this.props.loginActions.fetchUserByJWT()
        }
      } else {
        this.setState({ fetching: false, loading: true })
      }  
    }
    componentWillReceiveProps(nextProps) {
      if(this.state.fetching && !nextProps.users.loading) {
        this.setState({ fetching: false, loading: true })
      }
    }
    render() {
      const user = this.props.users.active

      if (this.state.loading) {
        const { pathname } = this.props.location
        const unsecured = unsecuredRoutes.indexOf(pathname) > -1
        const { history, location, loginActions, match, users, staticContext, ...originalProps } = this.props
        if(typeof user.userHandle === 'undefined') {
          if(unsecured) { return <WrappedComponent {...originalProps} /> }
          
          return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
        }
        if(user.userHandle) {
          if(unsecured) {
            return <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />
          } 
          return <WrappedComponent {...originalProps} />
        } 
      } 
    }
  }
  return withRouter(connect([users], [loginActions])(JWTVerify))
}
export default AutoLoginOrRedirect