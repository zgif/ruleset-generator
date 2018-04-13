import React, { Component } from 'react';
import RuleSelect from './RuleSelect.js';

class Field extends Component {
  render() {
    return (
      <div>
        <label>
          {this.props.name}
          <RuleSelect defaultValue={this.props.usage} />
        </label>
      </div>
    );
  }
}

export default Field;
