import { CURRENT_API_MODE, API_MODE, API } from '../config'

function getUrl(path, apiMode) {
  let url = `${ API.basePath[apiMode] }/${ path }`

  if (apiMode === API_MODE.mocked) {
    url += '.json'
  }

  return url
}

function fetchJson(path, apiMode = CURRENT_API_MODE) {
  return fetch(getUrl(path, apiMode))
    .then(response => response.json())
  
}

export function fetchRulesets() {
  if (CURRENT_API_MODE === API_MODE.mocked) {
    return fetchJson('rulesets')
  }

  // Using a mocked version here too because there's no live endpoint available.
  return fetchJson('rulesets_live', API_MODE.mocked)
}

export function fetchRuleset(url) {
  if (CURRENT_API_MODE === API_MODE.mocked) {
    return fetchJson(`rulesets/${ url }`)
  }

  return fetchJson(`ruleset/?ruleset_by_url=${ encodeURI(url) }`)
}

export function fetchEntity(name) {
  return fetchJson(`entities/${ name }`)
}
