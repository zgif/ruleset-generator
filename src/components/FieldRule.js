import React, { Component } from 'react'
import RuleSelect from './RuleSelect'
import Grid from 'material-ui/Grid'
import './FieldRule.css'

class FieldRule extends Component {
  render() {
    return (
      <Grid container component="label">
        <Grid item xs={ 6 } className="FieldRule__Name">
          { this.props.objectName }
        </Grid>
        <Grid item xs={ 6 }>
          <RuleSelect defaultValue={ this.props.value } />
        </Grid>
      </Grid>
    )
  }
}

export default FieldRule
