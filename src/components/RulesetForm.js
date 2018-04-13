import React, { Component } from 'react';
import EntityList from './EntityList';
import Button from 'material-ui/Button';
import { generateRuleset } from '../utils/Texts.js';

class RulesetForm extends Component {
  render() {
    return (
      <form>
        <EntityList entities={this.props.ruleset ? this.props.ruleset.entities : []} />
        <Button size="large" variant="raised" color="primary">
          {generateRuleset}
        </Button>
      </form>
    );
  }
}

export default RulesetForm;
