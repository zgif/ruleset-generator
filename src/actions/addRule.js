import { ADD_RULE } from './types'

export default function (parentPath, path, objectType, objectName) {
  return {
    type: ADD_RULE,
    payload: {
      type: 'basic',
      path,
      parentPath,
      objectType,
      objectName,
      childPaths: {
        entity: [],
        field: []
      }
    }
  }
}
