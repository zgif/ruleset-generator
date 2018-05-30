import { ADD_RULE, CHANGE_RULE_VALUE } from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
  case ADD_RULE:
    return [
      ...state,
      {
        type: 'basic',
        nestedRules: [],
        ...action.payload.objectType
      }
    ]

  case CHANGE_RULE_VALUE:
    return state.rules.map((rule) => {
      if (rule.path === action.payload.path) {
        return {
          ...rule,
          value: action.payload.value
        }
      }

      return rule
    })

  default:
    return state
  }
}
