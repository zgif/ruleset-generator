import React, { Component } from 'react'
import ConnectedEntityRule from '../containers/ConnectedEntityRule'
import List, { ListItem, ListItemText } from 'material-ui/List'

class EntityRuleList extends Component {
  render() {
    return (
      <List>
        { this.props.rules.map(rule => (
          <ListItem key={ rule.path } disableGutters>
            <ListItemText>
              <ConnectedEntityRule { ...rule } />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default EntityRuleList
