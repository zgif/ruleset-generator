import rules from './rules'

const initialState = {
  rules: [],
  rulesByPath: {},
  rootRulePaths: []
}

export default function app(state = initialState, action) {
  return {
    ...state,
    rules: rules(state.rules, action)
  }
}
