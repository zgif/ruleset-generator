import { CURRENT_API_MODE, API_MODE, API } from '../config';

class ZgifApi {
  static getUrl(path, apiMode) {
    let url = `${ API.basePath[apiMode] }/${ path }`;

    if (apiMode === API_MODE.mocked) {
      url += '.json';
    }

    return url;
  }

  static fetchJson(path, apiMode = CURRENT_API_MODE) {
    return fetch(this.getUrl(path, apiMode))
      .then(response => response.json())
    ;
  }

  static fetchRulesets() {
    return this.fetchJson('rulesets');
  }

  static fetchRuleset(id) {
    return this.fetchJson(`rulesets/${ id }`);
  }

  static fetchEntity(name) {
    return this.fetchJson(`entities/${ name }`);
  }
}

export default ZgifApi;
