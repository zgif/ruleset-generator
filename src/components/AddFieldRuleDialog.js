import React, { Component } from 'react'
import AddRuleDialog from './AddRuleDialog'
import { fetchEntity } from '../utils/ZgifApi'
import { addField, addFieldTo } from '../utils/Texts.js'

class AddFieldRuleDialog extends Component {
  render() {
    const { onClose, open, unavailableRules, parentRuleName } = this.props

    return (
      <AddRuleDialog
        onClose={ onClose }
        open={ open }
        fetchOptions={ this.fetchOptions }
        unavailableRules={ unavailableRules }
        title={ addFieldTo(parentRuleName) }
        addButtonText={ addField }
        />
    )
  }

  fetchOptions = () => {
    return fetchEntity(this.props.parentRuleName)
      .then(entity => entity.fields)
  }
}

export default AddFieldRuleDialog
