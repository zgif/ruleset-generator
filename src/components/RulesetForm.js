import React, { Component } from 'react'
import EntityRuleList from './EntityRuleList'
import FieldRuleList from './FieldRuleList'
import Button from 'material-ui/Button'
import { generateRuleset } from '../utils/Texts'

class RulesetForm extends Component {
  onSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <EntityRuleList rules={ this.props.rootEntities } />
        <FieldRuleList rules={ this.props.rootFieldRules } />
        <Button size="large" variant="raised" color="primary">
          { generateRuleset }
        </Button>
      </form>
    )
  }
}

export default RulesetForm
