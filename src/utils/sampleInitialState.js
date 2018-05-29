export default {
  // just a reference to easily retrieve rules
  rulesByPath: {
    'Company': {
      path: 'Company',
      name: 'Company',
      type: 'basic',
      value: 'core',
      objectType: 'entity',
      nestedRules: [
        'Company,balancePosition'
      ]
    },
    'Company,balancePosition': {
      path: 'Company,balancePosition',
      objectName: 'balancePosition',
      type: 'basic',
      value: 'core',
      objectType: 'field',
    }
  },

  rules: [
    {
      path: 'Company',
      name: 'Company',
      type: 'basic',
      value: 'core',
      objectType: 'entity',
      nestedRules: [
        'Company,balancePosition'
      ]
    },
    {
      path: 'Company,balancePosition',
      objectName: 'balancePosition',
      type: 'basic',
      value: 'core',
      objectType: 'field',
    }
  ],

  // which rules are in the root of the schema
  rootEntityPaths: [
    'Company'
  ],

  rootFieldPaths: [
  ]
}
