import tw from 'twin.macro'

import React, { Component } from 'react';
import {BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'
import {Message} from './components/Message'
import {Footer} from './components/Footer'
import { Loader } from './components/Loader'

 function App(){
    return (
      <div  css={tw`w-96 mx-auto ` } >
        <div >
          <h2 css={tw`text-lg font-semibold mb-4 text-purple-700 `}>Welcome to React with Twin, Easy </h2>
        </div>
        <Router>
        <>
            <Message />
            <Loader />
            <TodoForm />
              <Route path='/' render={({match}) => (
                <TodoList filter={match.params.filter} />
              )} />
          <Footer />
          </>
        </Router>
      </div>
    );

}

export default App
