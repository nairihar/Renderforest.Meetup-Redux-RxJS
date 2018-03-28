import React from 'react'
import { connect } from 'react-redux'
import { ping } from '../actions'

const App = ({ pinging, ping }) => (
  <div>
    <h1>{ pinging ? 'PING' : 'PONG' }</h1>
    <button onClick={ping}>Ping</button>
  </div>
)

export default connect(
  ({ pinging }) => ({ pinging }),
  { ping }
)(App)
