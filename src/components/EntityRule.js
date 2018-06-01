import React, { Component } from 'react'
import FieldRuleList from './FieldRuleList'
import EntityRuleList from './EntityRuleList'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import EntityRuleHeader from './EntityRuleHeader'
import { addFieldRule, addEntityRule } from '../utils/Texts'
import AddFieldRuleDialog from './AddFieldRuleDialog'
import AddEntityRuleDialog from './AddEntityRuleDialog'

class EntityRule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addingFieldRule: false,
      addingEntityRule: false
    }
  }

  onAddFieldRuleClick = () => {
    this.setState({ addingFieldRule: true })
  }

  onAddFieldRuleDialogClose = (fieldName) => {
    this.setState({ addingFieldRule: false })

    if (fieldName) {
      this.props.onAddRule('field', fieldName);
    }
  }

  onAddEntityRuleClick = () => {
    this.setState({ addingEntityRule: true })
  }

  onAddEntityRuleDialogClose = (entityName) => {
    this.setState({ addingEntityRule: false })

    if (entityName) {
      this.props.onAddRule('entity', entityName);
    }
  }

  render() {
    return (
      <Card elevation={ 1 } component="article">
        <CardContent>
          <EntityRuleHeader { ...this.props } />
          <FieldRuleList rules={ this.props.fieldRules } />
          <EntityRuleList rules={ this.props.entityRules } />
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" onClick={ this.onAddFieldRuleClick }>
            { addFieldRule }
          </Button>
          <Button size="small" color="secondary" onClick={ this.onAddEntityRuleClick }>
            { addEntityRule }
          </Button>
        </CardActions>
  
        <AddFieldRuleDialog parentRuleName={ this.props.objectName }
                            open={ this.state.addingFieldRule }
                            onClose={ this.onAddFieldRuleDialogClose }
                            unavailableRules={ this.props.fieldRules } />
        <AddEntityRuleDialog parentRuleName={ this.props.objectName }
                             open={ this.state.addingEntityRule }
                             onClose={ this.onAddEntityRuleDialogClose }
                             unavailableRules={ this.props.entityRules }/>
      </Card>
    )
  }
}

export default EntityRule
