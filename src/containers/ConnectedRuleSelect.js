import RuleSelect from '../components/RuleSelect'
import { connect } from 'react-redux'
import updateRuleValue from '../actions/updateRuleValue'

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(updateRuleValue(ownProps.path, e.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleSelect)
