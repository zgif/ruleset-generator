import { UPDATE_RULE_VALUE, ADD_CHILD_RULE_RELATION } from '../actions/types'

export default function (state = {}, action) {
  const { payload } = action

  switch (action.type) {
  case UPDATE_RULE_VALUE:
    return {
      ...state,
      value: payload.value
    }

  case ADD_CHILD_RULE_RELATION:
    const { childType, childPath } = payload

    if (state.path === payload.path) {
      return {
        ...state,
        childPaths: {
          ...state.childPaths,
          [childType]: [
            ...state.childPaths[childType],
            childPath
          ]
        }
      }
    }

    return state

  default:
    return state
  }
}
