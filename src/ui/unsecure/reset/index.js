import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import * as process from './process
import connected from 
import styles from './styles'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      surname: '',
      username: '',
      password: '',
      confirmedPassword: '',
      email: ''
    }
  }

  handleInput = (field) => event => {
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = () => {
    const { username, password } = this.state
    this.props.login.fetch(username, password)
  }

  render() {
    return (
      <div styleName="page">
        <div styleName="Content">
          <div styleName="Title">Check Your Email</div>
          <div styleName="Description">
            <div>An email has been sent to the address you entered!</div>
            <div>Follow the instructions to login.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CreateAccount))