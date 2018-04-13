import React, { Component } from 'react';
import Entity from './Entity.js';
import List, { ListItem, ListItemText } from 'material-ui/List';

class EntityList extends Component {
  render() {
    return (
      <List>
        {this.props.entities.map(entity => (
          <ListItem key={entity.name} disableGutters>
            <ListItemText>
              <Entity {...entity} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default EntityList;
