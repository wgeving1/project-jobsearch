import React, { Component } from 'react'
import { Page } from './styles'
// import * as gamesActions from '../../../../state/processes/games/actions'
import { connect } from 'react-redux'
// import { selector as games } from '../../../../state/entities/games/reducer'

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