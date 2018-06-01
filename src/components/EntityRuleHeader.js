import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import ConnectedRuleSelect from '../containers/ConnectedRuleSelect'
import './EntityRuleHeader.css'

class EntityRuleHeader extends Component {
  render() {
    return (
      <header className="EntityRuleHeader">
        <Grid container component="label">
          <Grid item xs={ 6 }>
            <Typography component="h1" variant="title">
              { this.props.objectName }
            </Typography>
          </Grid>
          <Grid item xs={ 6 }>
            <ConnectedRuleSelect path={ this.props.path }
                                 value={ this.props.value } />
          </Grid>
        </Grid>
      </header>
    )
  }
}

export default EntityRuleHeader
