import React, { Component } from 'react'
import BaseRulesetInput from '../components/BaseRulesetInput'
import ActiveRulesetForm from '../containers/ActiveRulesetForm'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { appDescription } from '../utils/Texts'
import './Main.css'

class Main extends Component {
  render() {
    let formGrid

    if (this.props.showRulesetForm) {
      formGrid = (
        <Grid item xs={ 12 }>
          <ActiveRulesetForm />
        </Grid>
      )
    }


    return (
      <Grid container justify="center" className="Main" component="main">
        <Grid item xs={ 12 }>
          <Typography paragraph>
            { appDescription }
          </Typography>
          <BaseRulesetInput onChange={ this.props.onRulesetInputChange }/>
        </Grid>

        { formGrid }
      </Grid>
    )
  }
}

export default Main
