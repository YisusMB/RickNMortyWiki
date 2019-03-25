import React, { Component } from 'react'
import LandingPage from "./pages/landingPage/LandingPage"
import {Route, Switch} from "react-router-dom"
import SearchPage from "./pages/searchPage/SearchPage"
import CharactersPage from './pages/characters/CharactersPage'
import CharacterPage from './pages/character/CharacterPage'
import ChaptersPage from './pages/chapters/ChaptersPage'
import Page404 from "./pages/Page404";

class Root extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/characters' component={CharactersPage}/>
        <Route exact path='/chapters' component={ChaptersPage}/>
        <Route path='/character' component={CharacterPage} />
        <Route exact path='/search' component={SearchPage}/>
        <Route exact path='/' component={LandingPage}/>
        <Route component={Page404}/>
      </Switch>
    )
  }
}

export default Root