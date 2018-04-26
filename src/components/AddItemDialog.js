import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import { cancel } from '../utils/Texts.js';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class AddItemDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onEntered = () => {
    this.props.fetchOptions()
      .then(options => options.filter(option => (
        !this.props.unavailableOptions.includes(option)
      )))
      .then(options => options.map(option => {
        return { label: option, value: option }
      }))
      .then(options => this.setState({ options }))
    ;
  }

  onExited = () => {
    this.setState({ value: ''});
  }

  onSelectChange = (option) => {
    this.setState({ value: option && option.value });
  }

  onCancelClick = () => {
    this.props.onClose();
  }

  onAddClick = () => {
    this.props.onClose(this.state.value);
  }

  render() {
    return (
      <Dialog
        maxWidth="xs"
        open={ this.props.open }
        onEntered={ this.onEntered }
        onExited={ this.onExited }
        PaperProps={{ style: { overflowY: 'visible'}}}
      >
        <DialogTitle>{ this.props.title }</DialogTitle>

        <DialogContent
          style={{ overflowY: 'visible'}}
          >
          <Select
            value={ this.state.value }
            onChange={ this.onSelectChange }
            options={ this.state.options }
            isLoading={!this.state.options }
            autoFocus
            />
        </DialogContent>

        <DialogActions>
          <Button onClick={ this.onCancelClick } color="primary">{ cancel }</Button>
          <Button onClick={ this.onAddClick } color="primary">{ this.props.addButtonText }</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddItemDialog;
