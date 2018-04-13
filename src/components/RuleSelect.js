import React, { Component } from 'react';
import Select from 'material-ui/Select';

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
      <Select native defaultValue={this.props.defaultValue}>
        {options}
      </Select>
    );
  }
}

export default RuleSelect;
