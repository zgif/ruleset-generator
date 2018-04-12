import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default App;
