import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Page, Content, Title, Description } from './styles'

class Reset extends Component {
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
      <Page>
        <Content>
          <Title>Check Your Email</Title>
          <Description>
            <div>An email has been sent to the address you entered!</div>
            <div>Follow the instructions to login.</div>
          </Description>
        </Content>
      </Page>
    )
  }
}

export default withRouter(connect([], [])(Reset))