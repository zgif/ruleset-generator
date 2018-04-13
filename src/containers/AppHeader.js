import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { appTitle } from '../utils/Texts';

class AppHeader extends Component {
  render() {
    return (
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {appTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppHeader;
