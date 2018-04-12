import React, { Component } from 'react';
import RuleSelect from './RuleSelect.js';
import FieldList from './FieldList.js';
import EntityList from './EntityList.js';

class Entity extends Component {
  render() {
    return (
      <div>
        <label>
          <h1>{this.props.name}</h1>
          <RuleSelect />
        </label>

        <FieldList fields={this.props.fields} />
        <button type="button">Add field</button>

        <EntityList entities={this.props.entities} />
        <button type="button">Add entity</button>
      </div>
    );
  }
}

export default Entity;
