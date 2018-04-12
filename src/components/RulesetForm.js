import React, { Component } from 'react';
import EntityList from './EntityList';

class RulesetForm extends Component {
  render() {
    return (
      <form>
        <EntityList entities={this.props.entity ? [this.props.entity] : []} />
        <button type="button">Download!</button>
      </form>
    );
  }
}

export default RulesetForm;
