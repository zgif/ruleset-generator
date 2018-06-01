import RuleSelect from '../components/RuleSelect'
import { connect } from 'react-redux'
import updateRule from '../actions/updateRule'

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(updateRule(ownProps.path, e.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleSelect)
