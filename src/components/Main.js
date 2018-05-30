import React, { Component } from 'react'
import BaseRulesetSelect from '../components/BaseRulesetSelect'
import ActiveRulesetForm from '../containers/ActiveRulesetForm'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { appDescription } from '../utils/Texts'
import './Main.css'

class Main extends Component {
  render() {
    const baseRulesetSelect = this.props.rulesets && (
      <BaseRulesetSelect rulesets={ this.props.rulesets }
                         defaultValue={ this.props.ruleset && this.props.ruleset.id }
                         onChange={ this.props.onRulesetChange }/>
    )

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
          { baseRulesetSelect }
        </Grid>
        
        { rulesetFormGrid }
      </Grid>
    )
  }
}

export default Main
