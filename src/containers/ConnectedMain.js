import Main from '../components/Main'
import { connect } from 'react-redux'
import { fetchRuleset } from '../utils/ZgifApi'
import updateActiveRuleset from '../actions/updateActiveRuleset'

const mapStateToProps = state => {
  return {
    showRulesetForm: !!state.activeRuleset
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRulesetInputChange: (rulesetUrl) => {
      (rulesetUrl ? fetchRuleset(rulesetUrl) : Promise.reject())
        .then(ruleset => {
          dispatch(updateActiveRuleset(ruleset));
        })
        .catch(() => {
          dispatch(updateActiveRuleset(null));
        })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
