import EntityRule from '../components/EntityRule'
import { connect } from 'react-redux'
import { getChildRules } from '../utils/Store'

const mapStateToProps = (state, ownProps) => {
  const { activeRuleset } = state

  return {
    entityRules: getChildRules(activeRuleset, ownProps, 'entity'),
    fieldRules: getChildRules(activeRuleset, ownProps, 'field')
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityRule)
