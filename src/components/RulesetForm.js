import React, { Component } from 'react';
import EntityList from './EntityList';
import Button from 'material-ui/Button';

class RulesetForm extends Component {
  render() {
    return (
      <form>
        <EntityList entities={this.props.entity ? [this.props.entity] : []} />
        <Button size="big" variant="raised" color="primary">
          Download!
        </Button>
      </form>
    );
  }
}

export default RulesetForm;
