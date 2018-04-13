import React, { Component } from 'react';
import AddItemDialog from './AddItemDialog';
import ZgifApi from '../utils/ZgifApi';
import { addEntity, addEntityTo } from '../utils/Texts.js';

class AddEntityDialog extends Component {
  render() {
    const { onClose, open } = this.props;

    return (
      <AddItemDialog
        onClose={onClose}
        open={open}
        fetchOptions={this.fetchOptions}
        title={addEntityTo(this.props.entityName)}
        addButtonText={addEntity}
        />
    );
  }

  fetchOptions = () => {
    return ZgifApi.fetchEntity(this.props.entityName)
      .then(entity => entity.entities.map(entity => entity.name))
    ;
  }
}

export default AddEntityDialog;
