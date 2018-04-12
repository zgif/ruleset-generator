import React, { Component } from 'react';

const options = [
  {
    text: '',
    value: ''
  },

  {
    text: 'core',
    value: 'core'
  },

  {
    text: 'not',
    value: 'not'
  },

  {
    text: 'optional',
    value: 'optional'
  }
];

class RuleSelect extends Component {
  renderOptions() {
    return options.map(option => (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    ));
  }

  render() {
    const options = this.renderOptions();

    return (
      <select value={this.props.value}>
        {options}
      </select>
    );
  }
}

export default RuleSelect;
