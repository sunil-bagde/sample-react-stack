import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider, createStore } from 'easy-peasy'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import { Provider } from 'react-redux'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'

import { store } from './store'
console.log('store', store.getState())
const messagesInFrench = {
  myMessage: "This translate message by `react-intl` {ts, date, ::yyyyMMdd}",
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    {/*<Provider store={store}>*/}
    <StoreProvider store={store}>
      <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
        <App />
      </IntlProvider>
    </StoreProvider>
    {/*</Provider>*/},
  </React.StrictMode>,
  document.getElementById('root'),
)
