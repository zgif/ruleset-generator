import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import RuleSelect from './RuleSelect'
import './EntityHeader.css'

class EntityHeader extends Component {
  render() {
    return (
      <header className="EntityHeader">
        <Grid container component="label">
          <Grid item xs={ 6 }>
            <Typography component="h1" variant="title">
              { this.props.objectName }
            </Typography>
          </Grid>
          <Grid item xs={ 6 }>
            <RuleSelect defaultValue={ this.props.value }/>
          </Grid>
        </Grid>
      </header>
    )
  }
}

export default EntityHeader
