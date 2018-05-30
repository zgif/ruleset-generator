import React, { Component } from 'react'
import AppHeader from './AppHeader'
import Main from './Main'
import CssBaseline from 'material-ui/CssBaseline'
import { appTitle } from '../utils/Texts'
import { fetchRulesets, fetchRuleset } from '../utils/ZgifApi'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rulesets: [],
      ruleset: null
    }

    fetchRulesets()
      .then(rulesets => this.setState({ rulesets }))
  }

  componentDidMount() {
    document.title = appTitle
  }

  onRulesetChange = (rulesetUrl) => {
    (rulesetUrl ? fetchRuleset(rulesetUrl) : Promise.resolve())
      .then(ruleset => this.setState({ ruleset }))
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <AppHeader />
        <Main rulesets={ this.state.rulesets }
              ruleset={ this.state.ruleset }
              onRulesetChange={ this.onRulesetChange } />
      </div>
    )
  }
}

export default App
