import React, { Component } from 'react';
import BaseRulesetSelect from '../components/BaseRulesetSelect';
import RulesetForm from '../components/RulesetForm';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './App.css';

const title = 'zgif: Ruleset Generator';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchEntity()
      .then(() => this.forceUpdate());
  }

  fetchEntity() {
    return fetch('api/company.json')
      .then(response => response.json())
      .then(entity => this.entity = entity)
    ;
  }

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <BaseRulesetSelect />
        <RulesetForm entity={this.entity} />
      </div>
    );
  }
}

export default App;
