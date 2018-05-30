import React, { Component } from 'react'
import AddRuleDialog from './AddRuleDialog'
import { fetchEntity } from '../utils/ZgifApi'
import { addEntity, addEntityTo } from '../utils/Texts.js'

class AddEntityRuleDialog extends Component {
  render() {
    const { onClose, open, unavailableRules, parentRuleName } = this.props

    return (
      <AddRuleDialog
        onClose={ onClose }
        open={ open }
        fetchOptions={ this.fetchOptions }
        unavailableRules={ unavailableRules }
        title={ addEntityTo(parentRuleName) }
        addButtonText={ addEntity }
        />
    )
  }

  fetchOptions = () => {
    return fetchEntity(this.props.parentRuleName)
      .then(entity => entity.entities.map(entity => entity.name)) 
  }
}

export default AddEntityRuleDialog
