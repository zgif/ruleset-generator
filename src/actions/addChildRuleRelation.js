import { ADD_CHILD_RULE_RELATION } from './types'

export default function (path, childType, childPath) {
  return {
    type: ADD_CHILD_RULE_RELATION,
    payload: {
      path,
      childType,
      childPath
    }
  }
}
