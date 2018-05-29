import { createStore } from 'redux'
import app from '../reducers/app'

function getInitialStoreState() {
  return {};
}

export function createAppStore() {
  createStore(app, getInitialStoreState())
}
