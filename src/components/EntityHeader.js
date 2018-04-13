import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import RuleSelect from './RuleSelect.js';

class EntityHeader extends Component {
  render() {
    return (
      <header>
        <label>
          <Typography component="h1" variant="title">
            {this.props.name}
          </Typography>
          <RuleSelect />
        </label>
      </header>
    );
  }
}

export default EntityHeader;
