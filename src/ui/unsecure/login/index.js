import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Icon, ButtonContent, Input } from 'semantic-ui-react'
import { Page, Content, Title, Description, Form } from './styles'
import { verifyUserRequest } from '../../../../../react-redux-template/web/src/pages/login/actions';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
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
    this.props.loginUser(email, password)
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
              <ButtonContent visible>Login</ButtonContent>
              <ButtonContent hidden>
                <Icon name="caret square right" />
              </ButtonContent>
            </Button>  
          </Form>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Content>
      </Page>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.loginpage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => {
      dispatch(verifyUserRequest(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)