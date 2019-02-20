import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

import { FooterContainer } from './styles.js'


class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div className="copyright">
          <Icon name="copyright" />Intensely Games 2018. All rights reserved.
        </div>
      </FooterContainer>
    )
  }
}

export default Footer