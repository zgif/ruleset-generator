import { createStore } from 'redux'
import app from '../reducers/app'

export function createAppStore() {
  return createStore(
    app,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export function getRules(activeRuleset, paths) {
  return paths.map(path => activeRuleset.rulesByPath[path])
}

export function getRootRules(activeRuleset, type) {
  return getRules(activeRuleset, activeRuleset.rootRulePaths[type] || [])
}

export function getChildRules(activeRuleset, rule, type) {
  return getRules(activeRuleset, rule.childPaths[type] || [])
}
