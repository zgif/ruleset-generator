import { UPDATE_RULE_VALUE } from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
  case UPDATE_RULE_VALUE:
    return {
      ...state,
      value: action.payload.value
    }

  default:
    return state
  }
}
