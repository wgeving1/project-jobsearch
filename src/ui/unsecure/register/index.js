import React, { Component } from 'react'
import { Button, Icon, Input } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux' 
import { Page, Content, Form, Row } from './styles'
import { registerNewUser } from './actions'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      surname: '',
      username: '',
      password: '',
      confirmedPassword: '',
      email: '',
      registered: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if(!this.props.register.userHandle && nextProps.register.userHandle) {
      this.setState({ registered: true })
    }
  }
  handleInput = (field) => event => {
    this.setState({ [field]: event.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { registered, ...params } = this.state
    this.props.registerNewUser({ ...params })
    console.log(this.state)
  }
  
  render() {
    if(this.state.registered) {
      return <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />
    }
    return (
      <Page>
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Input placeholder="First Name" type="text" onChange={this.handleInput('firstName')} />
              <Input placeholder="Last Name" type="text" onChange={this.handleInput('surname')} />
            </Row>
            <Row>
              <Input icon="id badge outline" placeholder="Username" type="text" onChange={this.handleInput('username')} />
            </Row>
            <Row>
              <Input icon="envelope square" placeholder="Email" type="text" onChange={this.handleInput('email')} />
            </Row>
            <Row>
              <Input icon="lock" placeholder="Password" type="password" onChange={this.handleInput('password')} />
            </Row>
            <Row>
              <Input icon="lock" placeholder="Confirm Password" type="password" onChange={this.handleInput('confirmedPassword')} />
            </Row>
            <Button type="submit" animated color="olive">
              <Button.Content visible>Create Account</Button.Content>
              <Button.Content hidden>
                <Icon name="caret square right"/>
              </Button.Content>
            </Button>
          </Form>
        </Content>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.registerpage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerNewUser: (...params) => {
      dispatch(registerNewUser(...params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)