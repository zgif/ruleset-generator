import { createStore } from 'redux'
import app from '../reducers/app'

export function createAppStore() {
  return createStore(
    app,
  )
}
