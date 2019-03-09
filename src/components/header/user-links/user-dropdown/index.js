import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const options = [
  { key: 'profile', as: Link, to: '/profile', text: 'Account', icon: 'user' },
  { key: 'sign-out', as: Link, to: '/sign-out', text: 'Sign Out', icon: 'sign out' }
]

class HeaderNavLinks extends Component {
  render() {
    const user = this.props.login
    const trigger = (
      <span>
        <Image avatar src={`${user.surname}`} >
          <Icon circular disabled name="user" size="large" />
        </Image>
      </span>
    )

    return [
      <Dropdown
        key="user-dropdown"
        trigger={trigger}
        options={options}
        pointing="top right"
        icon={null} />
    ]
  }
}

const mapStateToProps = state => {
  return {
    login: state.loginpage
  }
}

export default connect(mapStateToProps, [])(HeaderNavLinks)