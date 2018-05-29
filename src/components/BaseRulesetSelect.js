import React, { Component } from 'react'
import Select from 'material-ui/Select'
import { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import { baseRuleset } from '../utils/Texts'

class BaseRulesetSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue || ''
    }
  }

  renderOptions() {
    return this.props.rulesets.map(ruleset => (
      <option key={ ruleset.url } value={ ruleset.url }>
        { ruleset.name }
      </option>
    ))
  }

  onChange = (event) => {
    const value = event.currentTarget.value

    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    const options = this.renderOptions()

    return (
      <FormControl>
        <InputLabel htmlFor="base-ruleset">
          { baseRuleset }
        </InputLabel>
        <Select
          style={{ minWidth: '200px'}}
          native
          value={ this.state.value }
          inputProps={{
            id: 'base-ruleset'
          }}
          onChange={ this.onChange }
        >
          <option></option>
          { options }
        </Select>
      </FormControl>
    )
  }
}

export default BaseRulesetSelect
