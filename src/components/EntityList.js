import React, { Component } from 'react';
import Entity from './Entity.js';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

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
      <List>
        {this.props.entities.map(entity => (
          <ListItem key={entity.entityName}>
            <ListItemText>
              {this.renderEntity(entity)}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default EntityList;
