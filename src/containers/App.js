import React, { Component } from 'react';
import BaseRulesetSelect from '../components/BaseRulesetSelect';
import RulesetForm from '../components/RulesetForm';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';
import { title } from '../utils/Texts.js';
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
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <BaseRulesetSelect />
        <RulesetForm entity={this.entity} />
      </div>
    );
  }
}

export default App;
