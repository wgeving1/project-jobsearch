import React, { Component } from 'react'
import { Page } from './styles'
import { connect } from 'react-redux'

class JobTracker extends Component {
  componentDidMount() {
    // this.props.gamesActions.fetch()
  }

  render() {
    return (
      <Page>
          {/* {this.props.games.queued.map((u,i) => { */}
            {/* return <div key={i}>{u.userHandle}</div> */}
          })}
      </Page>
    )
  }
}

export default connect([],[])(JobTracker)