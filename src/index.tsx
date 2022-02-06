import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider, createStore } from 'easy-peasy';
import GlobalStyles from './styles/GlobalStyles'
import App from './App'

import { store } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
      <StoreProvider store={store}>
        <App />
      </StoreProvider>,
  </React.StrictMode>,
  document.getElementById('root'),
)
