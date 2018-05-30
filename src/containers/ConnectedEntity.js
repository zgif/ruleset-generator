import Entity from '../components/Entity'
import { connect } from 'react-redux'
import { getChildRules } from '../utils/Store'

const mapStateToProps = (state, ownProps) => {
  const { activeRuleset } = state

  return {
    entities: getChildRules(activeRuleset, ownProps, 'entity'),
    fields: getChildRules(activeRuleset, ownProps, 'field')
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entity)
