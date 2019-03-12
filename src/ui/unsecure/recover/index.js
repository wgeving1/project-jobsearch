import React, {Component} from 'react'
import { Button, Icon, Input, ButtonContent } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { recover } from './actions'
import { Content, Description, Title, Error, Form, Page } from './styles'

class Recover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      error: false
    }
  }
  handleInputEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  handleClick = () => {
    const { email } = this.state
    // TODO add some more frontend validation
    if(!email) {
      this.setState({ error: true })
      return 
    }
    this.setState({ error: false })
    this.props.recoverUser(email)
  }
  render() {
    return (
      <Page>
        <Content>
          <Title>Forgot Password?</Title>
          <Description>We'll Send You A Recovery Email</Description>
          <Form>
            <Input icon="mail square" iconPosition="left" size="big" placeholder="Your Email" type="text"
              value={this.state.email} onChange={this.handleInputEmail} />
            <Button type="button" animated color="olive" onClick={this.handleClick}>
              <ButtonContent visible>REMIND ME</ButtonContent>
              <ButtonContent hidden>
                <Icon name="caret square right" />
              </ButtonContent>
            </Button>
          </Form>
            {this.state.error ? <Error>Please provide an email</Error> : null}
        </Content>
      </Page>
    )
  }
}
  const mapStateToProps = state => {
    return {
      recover: state.recovery
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      recoverUser: (email) => {
        dispatch(recover(email))
      }
    }
  }  

export default connect(mapStateToProps, mapDispatchToProps)(Recover)