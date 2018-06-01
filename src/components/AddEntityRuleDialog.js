import React, { Component } from 'react'
import AddRuleDialog from './AddRuleDialog'
import { fetchEntity } from '../utils/ZgifApi'
import { addEntityRule, addEntityRuleTo } from '../utils/Texts.js'

class AddEntityRuleDialog extends Component {
  render() {
    const { onClose, open, unavailableRules, parentRuleName } = this.props

    return (
      <AddRuleDialog
        onClose={ onClose }
        open={ open }
        fetchOptions={ this.fetchOptions }
        unavailableRules={ unavailableRules }
        title={ addEntityRuleTo(parentRuleName) }
        addButtonText={ addEntityRule }
        />
    )
  }

  fetchOptions = () => {
    return fetchEntity(this.props.parentRuleName)
      .then(entity => entity.entities) 
  }
}

export default AddEntityRuleDialog
