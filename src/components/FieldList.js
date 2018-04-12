import React, { Component } from 'react';
import Field from './Field.js';

class FieldList extends Component {
  render() {
    return (
      <ul>
        {this.props.fields.map(fieldName => (
          <li key={fieldName}>
            <Field name={fieldName} />
          </li>
        ))}
      </ul>
    );
  }
}

export default FieldList;
