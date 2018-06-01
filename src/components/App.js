import React, { Component } from 'react'
import AppHeader from './AppHeader'
import ConnectedMain from '../containers/ConnectedMain'
import CssBaseline from 'material-ui/CssBaseline'
import { appTitle } from '../utils/Texts'

class App extends Component {
  componentDidMount() {
    document.title = appTitle
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <AppHeader />
        <ConnectedMain />
      </div>
    )
  }
}

export default App
