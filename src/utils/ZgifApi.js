import { CURRENT_API_MODE, API_MODE, API } from '../config'

function getUrl(path, apiMode = CURRENT_API_MODE) {
  let url = `${ API.basePath[apiMode] }/${ path }`

  if (apiMode === API_MODE.mocked) {
    url += '.json'
  }

  return url
}

function fetchJson(path, apiMode) {
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

function getRulesByPath(rules) {
  const rulesByPath = {}

  rules.forEach(rule => {
    const parentPath = rule.objectParents.join(',') || null
    const path = parentPath
      ? [parentPath, rule.objectName].join(',')
      : rule.objectName

    // Indexing
    rulesByPath[path] = {
      ...rule,
      path,
      parentPath,
      childPaths: {
        entity: [],
        field: []
      }
    }
  })

  return rulesByPath
}

function parseRulesetFromApiFormat(ruleset) {
  const rulesByPath = getRulesByPath(ruleset.rules)
  const rootRulePaths = {
    entity: [],
    field: []
  }

  // Adding tree references
  for (const path in rulesByPath) {
    const rule = rulesByPath[path]

    if (!rule.parentPath) {
      rootRulePaths[rule.objectType].push(path);
      continue;
    }

    const parentRule = rulesByPath[rule.parentPath];

    parentRule.childPaths[rule.objectType].push(rule.path)
  }

  return {
    rulesByPath,
    rootRulePaths
  };
}

export function fetchRuleset(url) {
  const fetchRuleset = CURRENT_API_MODE === API_MODE.mocked
    ? fetchJson(`rulesets/${ url }`)
    : fetchJson(`ruleset/?ruleset_by_url=${ encodeURI(url) }`)

  return fetchRuleset
    .then((ruleset) => parseRulesetFromApiFormat(ruleset))
}

export function fetchEntity(name) {
  return fetchJson(`entities/${ name }`)
}

function parseRulesetToApiFormat(ruleset) {
  const { rulesByPath } = ruleset
  const rules = []

  for (const path in rulesByPath) {
    const rule = rulesByPath[path]

    rules.push({
      objectType: rule.objectType,
      objectParents: rule.objectParents,
      objectName: rule.objectName,
      ruleType: rule.ruleType,
      value: rule.value
    })
  }

  return {
    meta: {},
    rules
  };
}

function downloadData(data, filename) {
  const a = document.createElement('a')
  a.href = data
  a.download = filename
  a.click()
}

export function downloadRuleset(ruleset) {
  const body = new FormData();

  body.append(
    'generate_ruleset',
    JSON.stringify(parseRulesetToApiFormat(ruleset))
  )

  return fetch(getUrl('ruleset/'), {
    method: 'POST',
    body
  })
    .then(response => response.text())
    .then(text => downloadData(text, 'ruleset.xsd'))
}
