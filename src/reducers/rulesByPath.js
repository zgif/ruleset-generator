import { ADD_RULE, UPDATE_RULE_VALUE, ADD_CHILD_RULE_RELATION } from '../actions/types'
import rule from './rule'

export default function (state = {}, action) {
  const { payload } = action

  switch (action.type) {
  case ADD_RULE:
    return {
      ...state,
      [payload.path]: {
        ...payload
      }
    }

  case ADD_CHILD_RULE_RELATION:
  case UPDATE_RULE_VALUE:
    return {
      ...state,
      [payload.path]: rule(state[payload.path], action)
    }

  default:
    return state
  }
}
