import React, { Component } from 'react';
import AddItemDialog from './AddItemDialog';
import ZgifApi from '../utils/ZgifApi';
import { addField, addFieldTo } from '../utils/Texts.js';

class AddFieldDialog extends Component {
  render() {
    const { onClose, open } = this.props;

    return (
      <AddItemDialog
        onClose={onClose}
        open={open}
        fetchOptions={this.fetchOptions}
        unavailableOptions={this.getUnavailableOptions()}
        title={addFieldTo(this.props.entityName)}
        addButtonText={addField}
        />
    );
  }

  fetchOptions = () => {
    return ZgifApi.fetchEntity(this.props.entityName)
      .then(entity => entity.fields)
    ;
  }

  getUnavailableOptions() {
    return this.props.currentFields.map(field => field.name);
  }
}

export default AddFieldDialog;
