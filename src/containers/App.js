import React, { Component } from 'react';
import BaseRulesetSelect from '../components/BaseRulesetSelect';
import RulesetForm from '../components/RulesetForm';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';
import Grid from 'material-ui/Grid';
import { appTitle, appDescription } from '../utils/Texts';
import ZgifApi from '../utils/ZgifApi';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleset: null
    }

    ZgifApi.fetchRulesets()
      .then(rulesets => this.setState({rulesets}));
  }

  componentDidMount() {
    document.title = appTitle;
  }

  onRulesetChange = (rulesetId) => {
    ZgifApi.fetchRuleset(rulesetId)
      .then(ruleset => this.setState({ruleset}))
    ;
  }

  render() {
    const baseRulesetSelect = this.state.rulesets && (
      <BaseRulesetSelect rulesets={this.state.rulesets}
                         defaultValue={this.state.ruleset && this.state.ruleset.id}
                         onChange={this.onRulesetChange}/>
    );

    const rulesetFormGrid = this.state.ruleset && (
      <Grid item xs={12}>
        <RulesetForm ruleset={this.state.ruleset} />
      </Grid>
    );

    return (
      <div className="App">
        <CssBaseline />
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {appTitle}
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container justify="center" className="App__Grid">
          <Grid item xs={12}>
            <Typography paragraph>
              {appDescription}
            </Typography>
            {baseRulesetSelect}
          </Grid>
          
          {rulesetFormGrid}
        </Grid>
      </div>
    );
  }
}

export default App;
