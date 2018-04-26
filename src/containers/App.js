import React, { Component } from 'react';
import AppHeader from './AppHeader';
import Main from './Main';
import CssBaseline from 'material-ui/CssBaseline';
import { appTitle } from '../utils/Texts';
import ZgifApi from '../utils/ZgifApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rulesets: [],
      ruleset: null
    }

    ZgifApi.fetchRulesets()
      .then(rulesets => this.setState({ rulesets }));
  }

  componentDidMount() {
    document.title = appTitle;
  }

  onRulesetChange = (rulesetId) => {
    (rulesetId ? ZgifApi.fetchRuleset(rulesetId) : Promise.resolve())
      .then(ruleset => this.setState({ ruleset }))
    ;
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
    );
  }
}

export default App;
