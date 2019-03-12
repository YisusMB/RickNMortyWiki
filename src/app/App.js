import React, { Component } from 'react';
import './App.css';
import PageContainer from "./PageContainer/PageContainer";
import Provider from "react-redux/es/components/Provider";
import { configureStore, defaultState } from '../store/configureStore'
const store = configureStore(defaultState)

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
