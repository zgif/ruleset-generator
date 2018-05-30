import React, { Component } from 'react'
import FieldList from './FieldList'
import EntityList from './EntityList'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import EntityHeader from './EntityHeader'
import { addField, addEntity } from '../utils/Texts'
import AddFieldRuleDialog from './AddFieldRuleDialog'
import AddEntityRuleDialog from './AddEntityRuleDialog'

class Entity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addingField: false,
      addingEntity: false
    }
  }

  onAddFieldClick = () => {
    this.setState({ addingField: true })
  }

  onAddFieldRuleDialogClose = (fieldName) => {
    this.setState({ addingField: false })

    if (fieldName) {
      // add field
    }
  }

  onAddEntityClick = () => {
    this.setState({ addingEntity: true })
  }

  onAddEntityRuleDialogClose = (entityName) => {
    this.setState({ addingEntity: false })

    if (entityName) {
      // add field
    }
  }

  render() {
    return (
      <Card elevation={ 1 } component="article">
        <CardContent>
          <EntityHeader { ...this.props } />
          <FieldList fields={ this.props.fields } />
          <EntityList entities={ this.props.entities } />
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" onClick={ this.onAddFieldClick }>
            { addField }
          </Button>
          <Button size="small" color="secondary" onClick={ this.onAddEntityClick }>
            { addEntity }
          </Button>
        </CardActions>
  
        <AddFieldRuleDialog parentRuleName={ this.props.objectName }
                            open={ this.state.addingField }
                            onClose={ this.onAddFieldRuleDialogClose }
                            unavailableRules={ this.props.fields } />
        <AddEntityRuleDialog parentRuleName={ this.props.objectName }
                             open={ this.state.addingEntity }
                             onClose={ this.onAddEntityRuleDialogClose }
                             unavailableRules={ this.props.entities }/>
      </Card>
    )
  }
}

export default Entity
