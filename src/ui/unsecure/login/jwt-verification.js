import React, { Component } from 'react'
import jwt from 'jsonwebtoken'
import { Redirect, withRouter } from 'react-router-dom'
import { fetchUserByJWT } from './actions'
import { connect } from 'react-redux'
import authToken from '../../../utilities/local-storage'
import { unsecuredRoutes } from '../../index'

const AutoLoginOrRedirectProcess = WrappedComponent => {
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
      const user = this.props.login
      if(token && !user.userHandle) {
        const decoded = jwt.decode(token)
        const currentTime = (new Date().getTime()) / 1000
        if(decoded.exp < currentTime) {
          authToken.remove()
          this.setState({ fetching: false, loading: true })
        } else {
          this.props.fetchUserByJWT()
        }
      } else {
        this.setState({ fetching: false, loading: true })
      }  
    }
    componentWillReceiveProps(nextProps) {
      if(this.state.fetching && !nextProps.user.loading) {
        this.setState({ fetching: false, loading: true })
      }
    }
    render() {

      if (this.state.loading) {
        const user = this.props.login
        const { pathname } = this.props.location
        const unsecured = unsecuredRoutes.indexOf(pathname) > -1
        const { history, location, fetchUserByJWT, match, staticContext, ...originalProps } = this.props
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
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(JWTVerify))
}

const mapStateToProps = (state) => {
  return {
    login: state.loginpage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserByJWT: () => {
      dispatch(fetchUserByJWT())
    }
  }
}
export default AutoLoginOrRedirectProcess