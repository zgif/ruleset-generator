import React, { Component } from 'react';
import Field from './Field.js';

class FieldList extends Component {
  render() {
    return (
      <ul>
        {this.props.fields.map(field => (
          <li key={field.name}>
            <Field name={field.name} defaultValue={field.value} />
          </li>
        ))}
      </ul>
    );
  }
}

export default FieldList;
