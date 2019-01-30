import React from 'react'
import { Button, Icon, Input, ButtonContent } from 'semantic-ui-react'
import { recoverProcess } from 
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
    this.props.recoverProcess(email)
  }
  render() {
    return (
      <Page>
        <Content>
          <Title>Forgot Password</Title>
          <Description>We'll Send You A Recovery Email</Description>
          <Form>
            <Input icon="mail square" iconPosition="left" size="big" placeholder="Your Email" type="text"
              value={this.state.email} onChange={this.handleInputEmail} />
            <Button type="button" animated color="olive" onClick={this.handleClick}>
              <Button.Content visible>REMIND ME</Button.Content>
              <Button.Content hidden>
                <Icon name="caret square right" />
              </Button.Content>
            </Button>
          </Form>
        </Content>
      </Page>
    )
  }
}
export default recoverProcess(Recover)