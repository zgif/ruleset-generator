import React, { Component } from 'react';
import RuleSelect from './RuleSelect';
import Grid from 'material-ui/Grid';
import './Field.css';

class Field extends Component {
  render() {
    return (
      <Grid container component="label">
        <Grid item xs={ 6 } className="Field__Name">
          { this.props.name }
        </Grid>
        <Grid item xs={ 6 }>
          <RuleSelect defaultValue={ this.props.usage } />
        </Grid>
      </Grid>
    );
  }
}

export default Field;
