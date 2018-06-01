import { UPDATE_ACTIVE_RULESET } from '../actions/types'
import rulesByPath from './rulesByPath'

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
      rulesByPath: rulesByPath(state.rulesByPath, action)
    }
  }
}
