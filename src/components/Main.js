import React, { Component } from 'react'
import BaseRulesetInput from '../components/BaseRulesetInput'
import ActiveRulesetForm from '../containers/ActiveRulesetForm'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { appDescription } from '../utils/Texts'
import './Main.css'

class Main extends Component {
  render() {
    const rulesetFormGrid = this.props.ruleset && (
      <Grid item xs={ 12 }>
        <ActiveRulesetForm />
      </Grid>
    )

    return (
      <Grid container justify="center" className="Main" component="main">
        <Grid item xs={ 12 }>
          <Typography paragraph>
            { appDescription }
          </Typography>
          <BaseRulesetInput defaultValue={ this.props.ruleset && this.props.ruleset.id }
                            onChange={ this.props.onRulesetChange }/>
        </Grid>
        
        { rulesetFormGrid }
      </Grid>
    )
  }
}

export default Main
