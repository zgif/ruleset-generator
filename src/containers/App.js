import React, { Component } from 'react';
import BaseRulesetSelect from '../components/BaseRulesetSelect';
import RulesetForm from '../components/RulesetForm';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <BaseRulesetSelect />
        <RulesetForm entity={this.entity} />
      </div>
    );
  }
}

export default App;
