import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//copy form http://redux.js.org/docs/advanced/AsyncActions.html
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts } from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(selectSubreddit('frontend'))
store.dispatch(fetchPosts('frontend')).then(() =>
  console.log(store.getState())
)

//

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
