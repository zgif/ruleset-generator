import React, { Component } from 'react'
import Input from 'material-ui/Input'
import { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import { baseRulesetUrl } from '../utils/Texts'

class BaseRulesetInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue || ''
    }
  }

  onChange = (event) => {
    const value = event.currentTarget.value

    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    return (
      <FormControl style={{ width: '100%'}}>
        <InputLabel htmlFor="base-ruleset">
          { baseRulesetUrl }
        </InputLabel>
        <Input
          value={ this.state.value }
          inputProps={{
            id: 'base-ruleset'
          }}
          onChange={ this.onChange }
        />
      </FormControl>
    )
  }
}

export default BaseRulesetInput
