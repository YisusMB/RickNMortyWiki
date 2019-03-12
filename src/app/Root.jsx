import React, { Component } from 'react'
import LandingPage from "./pages/landingPage/LandingPage";
import {Route, Switch} from "react-router-dom";
import SearchPage from "./pages/searchPage/SearchPage";
import Page404 from "./pages/Page404";

class Root extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/search' component={SearchPage}/>
        <Route exact path='/' component={LandingPage}/>
        <Route component={Page404}/>
      </Switch>
    )
  }
}

export default Root