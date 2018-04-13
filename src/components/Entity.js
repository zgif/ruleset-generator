import React, { Component } from 'react';
import FieldList from './FieldList.js';
import EntityList from './EntityList.js';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import EntityHeader from './EntityHeader.js';
import { addField, addEntity } from '../utils/Texts.js';

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
