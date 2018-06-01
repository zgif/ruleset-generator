import React, { Component } from 'react'
import FieldRule from './FieldRule'
import List, { ListItem, ListItemText } from 'material-ui/List'

class FieldRuleList extends Component {
  render() {
    return (
      <List>
        { this.props.rules.map(rule => (
          <ListItem key={ rule.path } disableGutters>
            <ListItemText style={{ paddingRight: 0 }}>
              <FieldRule { ...rule } />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default FieldRuleList
