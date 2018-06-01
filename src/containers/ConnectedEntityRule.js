import EntityRule from '../components/EntityRule'
import { connect } from 'react-redux'
import { getChildRules } from '../utils/Store'
import addRule from '../actions/addRule'
import addChildRuleRelation from '../actions/addChildRuleRelation'

const mapStateToProps = (state, ownProps) => {
  const { activeRuleset } = state

  return {
    entityRules: getChildRules(activeRuleset, ownProps, 'entity'),
    fieldRules: getChildRules(activeRuleset, ownProps, 'field')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddRule: (type, name) => {
      const parentPath = ownProps.path
      const path = parentPath ? [parentPath, name].join() : name

      dispatch(addRule(parentPath, path, type, name))
      dispatch(addChildRuleRelation(parentPath, type, path))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityRule)
