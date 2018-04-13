import React, { Component } from 'react';
import BaseRulesetSelect from '../components/BaseRulesetSelect';
import RulesetForm from '../components/RulesetForm';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';
import Grid from 'material-ui/Grid';
import { appTitle, appDescription } from '../utils/Texts.js';
import ZgifApi from '../utils/ZgifApi.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    ZgifApi.fetchRulesets()
      .then(rulesets => this.setState({rulesets}));
  }

  componentDidMount() {
    document.title = appTitle;
  }

  render() {
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
            <BaseRulesetSelect />
            <Typography paragraph>
              {appDescription}
            </Typography>
          </Grid>
          
          <RulesetForm entity={this.entity} />
        </Grid>
      </div>
    );
  }
}

export default App;
