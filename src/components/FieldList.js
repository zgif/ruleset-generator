import React, { Component } from 'react';
import Field from './Field';
import List, { ListItem, ListItemText } from 'material-ui/List';

class FieldList extends Component {
  render() {
    return (
      <List>
        {this.props.fields.map(field => (
          <ListItem key={field.name} disableGutters>
            <ListItemText style={{paddingRight: 0}}>
              <Field {...field} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default FieldList;
