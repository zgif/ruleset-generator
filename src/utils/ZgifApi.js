class ZgifApi {
  static basePath = 'api';

  static fetchJson(path) {
    return fetch(`${this.basePath}/${path}.json`)
      .then(response => response.json())
    ;
  }

  static fetchRulesets() {
    return this.fetchJson('rulesets');
  }

  static fetchRuleset(id) {
    return this.fetchJson(`rulesets/${id}`);
  }

  static fetchEntity(name) {
    return this.fetchJson(`entities/${name}`);
  }
}

export default ZgifApi;
