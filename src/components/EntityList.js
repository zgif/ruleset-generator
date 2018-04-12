import React, { Component } from 'react';
import Entity from './Entity.js';

class EntityList extends Component {
  renderEntity(entity) {
    return (
      <Entity name={entity.entityName}
              fields={entity.fields}
              entities={entity.subEntities} />
    );
  }

  render() {
    return (
      <ul>
        {this.props.entities.map(entity => (
          <li key={entity.entityName}>
            {this.renderEntity(entity)}
          </li>
        ))}
      </ul>
    );
  }
}

export default EntityList;
