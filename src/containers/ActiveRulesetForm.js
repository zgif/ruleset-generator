import RulesetForm from '../components/RulesetForm'
import { connect } from 'react-redux'

const getRules = (state, paths) => {
  return paths.map(path => state.rulesByPath[path])
}

const mapStateToProps = state => {
  return {
    rootEntities: getRules(state, state.rootEntityPaths),
    rootFields: getRules(state, state.rootFieldPaths)
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
