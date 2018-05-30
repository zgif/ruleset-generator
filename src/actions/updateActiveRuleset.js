import { UPDATE_ACTIVE_RULESET } from './types'

export default function (ruleset) {
  return {
    type: UPDATE_ACTIVE_RULESET,
    payload: {
      ruleset
    }
  }
}
