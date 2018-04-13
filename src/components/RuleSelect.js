import React, { Component } from 'react';
import Select from 'material-ui/Select';
import { usageOptions } from '../utils/Texts.js';

const options = [
  {
    text: '',
    value: ''
  },

  {
    value: 'core',
    text: usageOptionTexts.core
  },

  {
    value: 'not',
    text: usageOptionTexts.not
  },

  {
    value: 'optional',
    text: usageOptionTexts.optional
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
