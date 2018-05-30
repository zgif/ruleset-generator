import React, { Component } from 'react'
import AddItemDialog from './AddItemDialog'
import { fetchEntity } from '../utils/ZgifApi'
import { addEntity, addEntityTo } from '../utils/Texts.js'

class AddEntityDialog extends Component {
  render() {
    const { onClose, open } = this.props

    return (
      <AddItemDialog
        onClose={ onClose }
        open={ open }
        fetchOptions={ this.fetchOptions }
        unavailableOptions={ this.getUnavailableOptions()}
        title={ addEntityTo(this.props.entityName)}
        addButtonText={ addEntity }
        />
    )
  }

  fetchOptions = () => {
    return fetchEntity(this.props.entityName)
      .then(entity => entity.entities.map(entity => entity.name))
    
  }

  getUnavailableOptions() {
    return this.props.currentEntities.map(entity => entity.name)
  }
}

export default AddEntityDialog
