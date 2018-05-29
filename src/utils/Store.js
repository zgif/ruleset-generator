import { createStore } from 'redux'
import app from '../reducers/app'
import sampleInitialState from './sampleInitialState'

function getInitialStoreState() {
  return sampleInitialState;
  // return {};
}

export function createAppStore() {
  createStore(app, getInitialStoreState())
}
