import { UPDATE_ACTIVE_RULESET } from '../actions/types'
import rulesByPath from './rulesByPath'

export default function (state, action) {
  switch(action.type) {
  case UPDATE_ACTIVE_RULESET:
    const { ruleset } = action.payload

    if (!ruleset) {
      return null
    }

    return {
      ...ruleset
    }

  default:
    if (!state) {
      return null
    }

    return {
      ...state,
      rulesByPath: rulesByPath(state.rulesByPath, action)
    }
  }
}
