import React, { Component } from 'react';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { baseRuleset } from '../utils/Texts';

class BaseRulesetSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue || ''
    }
  }

  renderMenuItems() {
    return this.props.rulesets.map(ruleset => (
      <MenuItem key={ruleset.id} value={ruleset.id}>{ruleset.name}</MenuItem>
    ));
  }

  onChange = (event) => {
    const value = event.target.value;

    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    const menuItems = this.renderMenuItems();

    return (
      <FormControl>
        <InputLabel htmlFor="base-ruleset">
          {baseRuleset}
        </InputLabel>
        <Select
          style={{minWidth: '200px'}}
          autoWidth
          value={this.state.value}
          inputProps={{
            id: 'base-ruleset'
          }}
          onChange={this.onChange}
        >
          {menuItems}
        </Select>
      </FormControl>
    );
  }
}

export default BaseRulesetSelect;
