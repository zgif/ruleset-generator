import { CURRENT_API_MODE, API_MODE, API } from '../config'

class ZgifApi {
  static getUrl(path, apiMode) {
    let url = `${ API.basePath[apiMode] }/${ path }`

    if (apiMode === API_MODE.mocked) {
      url += '.json'
    }

    return url
  }

  static fetchJson(path, apiMode = CURRENT_API_MODE) {
    return fetch(this.getUrl(path, apiMode))
      .then(response => response.json())
    
  }

  static fetchRulesets() {
    if (CURRENT_API_MODE === API_MODE.mocked) {
      return this.fetchJson('rulesets')
    }

    // Using a mocked version here too because there's no live endpoint available.
    return this.fetchJson('rulesets_live', API_MODE.mocked)
  }

  static fetchRuleset(url) {
    if (CURRENT_API_MODE === API_MODE.mocked) {
      return this.fetchJson(`rulesets/${ url }`)
    }

    return this.fetchJson(`ruleset/?ruleset_by_url=${ encodeURI(url) }`)
  }

  static fetchEntity(name) {
    return this.fetchJson(`entities/${ name }`)
  }
}

export default ZgifApi
