import React, { Component } from 'react'
import EntityList from './EntityList'
import FieldList from './FieldList'
import Button from 'material-ui/Button'
import { generateRuleset } from '../utils/Texts'

class RulesetForm extends Component {
  onSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <EntityList entities={ this.props.rootEntities } />
        <FieldList fields={ this.props.rootFields } />
        <Button size="large" variant="raised" color="primary">
          { generateRuleset }
        </Button>
      </form>
    )
  }
}

export default RulesetForm
