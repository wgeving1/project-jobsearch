import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Input } from 'semantic-ui-react'
import { Page, Content, Title, Description, Form } from './styles'
import { Login, AutoLoginOrRedirect } from 

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputEmail = (event) => {
    event.preventDefault()
    this.setState({ email: event.target.value })
  }
  handleInputPassword = (event) => {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.login(email, password)
  }
  render() {
    return (
      <Page>
        <Content>
          <Title>Welcome To TechJobber</Title>
          <Description>Sign in with your information below:</Description>

          <Form onSubmit={this.handleSubmit}>
            <Input icon="mail square" iconPosition="left" size="big" placeholder="Your Email" type="text"
              value={this.state.email} onChange={this.handleInputEmail} />
            <Input icon="user secret" iconPosition="left" size="big" placeholder="Your Password" type="password"
              value={this.state.password} onChange={this.handleInputPassword} />
            <Button type="submit" animated color="green">
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name="caret square right" />
              </Button.Content>
          </Form>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Content>
      </Page>
    )
  }
}