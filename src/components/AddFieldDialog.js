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
        fetchOptions={this.fetchAvailableFields}
        title={addFieldTo(this.props.entityName)}
        addButtonText={addField}
        />
    );
  }

  fetchAvailableFields = () => {
    return ZgifApi.fetchEntity(this.props.entityName)
      .then(entity => {
        return [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' }
        ];
      })
    ;
  }
}

export default AddFieldDialog;
