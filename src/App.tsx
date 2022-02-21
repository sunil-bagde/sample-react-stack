import tw from 'twin.macro'

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'


import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ConnectedRouter } from 'connected-react-router'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'
import { Message } from './components/Message'
import   { history } from './store'
function App() {
  return (
    <div css={tw`w-96 mx-auto `}>
      <div>
        <h2 css={tw`text-lg font-semibold mb-4 text-purple-700 `}>
          Welcome to React with Twin, Easy{' '}
        </h2>
        
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />
      </div>
      <Router >
        <>
          <Message />
          <Loader />
          <TodoForm />
          <Route
            path="/:filter?"
            render={({ match }) => <TodoList filter={match.params.filter} />}
          />
          <Footer />
        </>
      </Router>
    </div>
  )
}

export default App
