import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog'
import { cancel } from '../utils/Texts.js'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class AddRuleDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.unavailableOptions = props.unavailableRules.map(rule => rule.objectName)
  }

  onEntered = () => {
    this.props.fetchOptions()
      .then(options => options.filter(option => (
        !this.unavailableOptions.includes(option)
      )))
      .then(options => options.map(option => {
        return { label: option, value: option }
      }))
      .then(options => this.setState({ options }))
    
  }

  onExited = () => {
    this.setState({ value: ''})
  }

  onSelectChange = (option) => {
    this.setState({ value: option && option.value })
  }

  onCancelClick = () => {
    this.props.onClose()
  }

  onAddClick = () => {
    this.props.onClose(this.state.value)
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
          <Typography component="div">
            <Select
              value={ this.state.value }
              onChange={ this.onSelectChange }
              options={ this.state.options }
              isLoading={!this.state.options }
              autoFocus
              />
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={ this.onCancelClick } color="primary">{ cancel }</Button>
          <Button onClick={ this.onAddClick } color="primary">{ this.props.addButtonText }</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default AddRuleDialog
