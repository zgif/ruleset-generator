import React, { Component } from 'react';
import RuleSelect from './RuleSelect.js';
import FieldList from './FieldList.js';
import EntityList from './EntityList.js';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { addField, addEntity } from '../utils/Texts.js';

class Entity extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <label>
            <h1>{this.props.name}</h1>
            <RuleSelect />
          </label>
          <FieldList fields={this.props.fields} />
          <EntityList entities={this.props.entities} />
        </CardContent>
        <CardActions>
          <Button size="small" variant="raised" color="secondary">
            {addField}
          </Button>
          <Button size="small" variant="raised" color="secondary">
            {addEntity}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Entity;
