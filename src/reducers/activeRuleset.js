import { UPDATE_ACTIVE_RULESET } from '../actions/types'
import rules from './rules'

const initialState = {
  rulesByPath: {},
  rootRulePaths: []
}

export default function (state = initialState, action) {
  switch(action.type) {
  case UPDATE_ACTIVE_RULESET:
    return {
      ...action.payload.ruleset
    }

  default:
    return {
      ...state,
      // To be redefined.
      // rules: rules(state.rules, action)
    }
  }
}
