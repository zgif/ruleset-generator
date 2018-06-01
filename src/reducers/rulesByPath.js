import { ADD_RULE, UPDATE_RULE_VALUE } from '../actions/types'
import rule from './rule'

export default function (state = {}, action) {
  switch (action.type) {
  // case ADD_RULE:
  //   return {
  //     ...state,
  //     {
  //       type: 'basic',
  //       ...action.payload.objectType
  //     }
  //   }

  case UPDATE_RULE_VALUE:
    const path = action.payload.path

    return {
      ...state,
      [path]: rule(state[path], action)
    }

  default:
    return state
  }
}
