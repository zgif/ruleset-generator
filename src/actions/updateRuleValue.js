import { UPDATE_RULE_VALUE } from './types'

export default function (path, value) {
  return {
    type: UPDATE_RULE_VALUE,
    payload: {
      path,
      value
    }
  }
}
