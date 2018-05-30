import RulesetForm from '../components/RulesetForm'
import { connect } from 'react-redux'
import { getRootRules } from '../utils/Store'

const mapStateToProps = state => {
  const { activeRuleset } = state

  return {
    rootEntities: getRootRules(activeRuleset, 'entity'),
    rootFields: getRootRules(activeRuleset, 'field')
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RulesetForm)
