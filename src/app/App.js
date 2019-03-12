import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { configureStore, defaultState } from '../store/configureStore'
import history from '../store/history'
import PageContainer from './PageContainer/PageContainer'

const store = configureStore(defaultState, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <PageContainer />
      </div>
      </Provider>
    );
  }
}

export default App;
