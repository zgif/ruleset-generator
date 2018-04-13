import React, { Component } from 'react';
import FieldList from './FieldList';
import EntityList from './EntityList';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import EntityHeader from './EntityHeader';
import { addField, addEntity } from '../utils/Texts';

class Entity extends Component {
  render() {
    return (
      <Card elevation={1} component="article">
        <CardContent>
          <EntityHeader {...this.props} />
          <FieldList fields={this.props.fields} />
          <EntityList entities={this.props.entities} />
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            {addField}
          </Button>
          <Button size="small" color="secondary">
            {addEntity}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Entity;
