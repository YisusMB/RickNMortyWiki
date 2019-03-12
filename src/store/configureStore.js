import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

export const history = createBrowserHistory()

export const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const store = createStore(
    reducers,composeWithDevTools(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return store
}

export const defaultState = {
  landingPage: {
    loading: true
  }
}
