import React, { Component } from 'react';
import BaseRulesetSelect from '../components/BaseRulesetSelect';
import RulesetForm from '../components/RulesetForm';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';
import { title } from '../utils/Texts.js';
import Grid from 'material-ui/Grid';
import ZgifApi from '../utils/ZgifApi.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    ZgifApi.fetchRulesets()
      .then(rulesets => this.setState({rulesets}));
  }

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container justify="center" className="App__Grid">
          <Grid item xs={12}>
            <BaseRulesetSelect />
          </Grid>
          
          <RulesetForm entity={this.entity} />
        </Grid>
      </div>
    );
  }
}

export default App;
