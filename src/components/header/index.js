import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import UserLinks from './user-links'
import HeaderDefaultLinks from './nav-links'

import {
  ActiveLink,
  HeaderContainer,
  LogoContainer
} from './styles'


class Header extends Component {
  

  render() {

    const user = this.props.login
    const logoLink = user && user.userHandle ? '/landing' : '/'

    return (
      <HeaderContainer>
        <Link to={logoLink}>
            <LogoContainer>
              Tech Jobber Home
            </LogoContainer>
        </Link>
        <ActiveLink>
          {user.userHandle ? <UserLinks /> : <HeaderDefaultLinks />}
        </ActiveLink>
      </HeaderContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.loginpage
  }
} 

export default withRouter(connect(mapStateToProps, [])(Header))