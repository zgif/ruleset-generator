import React, { Component } from 'react'
import EntityRuleList from './EntityRuleList'
import FieldRuleList from './FieldRuleList'
import Button from 'material-ui/Button'
import { generateRuleset } from '../utils/Texts'
import { downloadRuleset } from '../utils/ZgifApi'

class RulesetForm extends Component {
  onSubmit = (event) => {
    event.preventDefault()
    downloadRuleset(this.props.ruleset)
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <EntityRuleList rules={ this.props.rootEntityRules } />
        <FieldRuleList rules={ this.props.rootFieldRules } />
        <Button size="large" variant="raised" color="primary" type="submit">
          { generateRuleset }
        </Button>
      </form>
    )
  }
}

export default RulesetForm
