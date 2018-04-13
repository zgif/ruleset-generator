import React, { Component } from 'react';
import EntityList from './EntityList';
import Button from 'material-ui/Button';
import { generateRuleset } from '../utils/Texts.js';

class RulesetForm extends Component {
  render() {
    return (
      <form>
        <EntityList entities={this.props.entity ? [this.props.entity] : []} />
        <Button size="big" variant="raised" color="primary">
          {generateRuleset}
        </Button>
      </form>
    );
  }
}

export default RulesetForm;
