import React, { Component } from 'react';
import RuleSelect from './RuleSelect';
import Grid from 'material-ui/Grid';

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
