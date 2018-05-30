import { createStore } from 'redux'
import app from '../reducers/app'

export function createAppStore() {
  return createStore(
    app,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
