import React, { Component } from 'react'
import { AutoLoginOrRedirect } from '../../../state/processes/auth/login'
import { Page, Sidenav } from './styles'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import JobTracker from './jobtracker'

class LandingPage extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Sidenav>
            <ul>
              <li>
                <Link to='/landing'>Main</Link>
              </li>
              <li>
                <Link to='landing/jobtracker'>Job Tracker</Link>
              </li>
              <li>
                <Link to='/landing/contact'>Contact Us</Link>
              </li>
              <li>
                <Link to='/landing/about'>About Us</Link>
              </li>
            </ul>
          </Sidenav>
          <Route exact path='/landing' component={() => <div>Tech Jobber</div>} />
          <Route exact path='/landing/jobtracker' component={JobTracker} />
          <Route exact path='/landing/contact' component={() => <div>Contact</div>} />
          <Route exact path='/landing/about' component={() => <div>About</div>}/>
        </Page>
      </Router>
    )
  }
}
export default AutoLoginOrRedirect(LandingPage)