import React from 'react'
import ReactDOM from 'react-dom'
import ConnectedApp from './containers/ConnectedApp'
import { Provider } from 'react-redux'
import { createAppStore } from './utils/Store'

const store = createAppStore()

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
