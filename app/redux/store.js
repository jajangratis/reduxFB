import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import appReducer from './rootReducers'

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)

const store = createStore(
  appReducer,
  applyMiddleware(
    middleware,
    logger,
    promiseMiddleware(),
  ),
  
);

export default store
