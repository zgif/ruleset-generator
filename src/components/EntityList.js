import React, { Component } from 'react'
import ConnectedEntity from '../containers/ConnectedEntity'
import List, { ListItem, ListItemText } from 'material-ui/List'

class EntityList extends Component {
  render() {
    return (
      <List>
        { this.props.entities.map(entity => (
          <ListItem key={ entity.name } disableGutters>
            <ListItemText>
              <ConnectedEntity { ...entity } />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default EntityList
