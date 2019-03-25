import { combineReducers } from 'redux'
import { landingPageReducers } from '../app/pages/landingPage/duck'
import { searchPageReducers } from '../app/pages/searchPage/duck'
import { chaptersPageReducers } from '../app/pages/chapters/duck'
import { charactersPageReducers } from '../app/pages/characters/duck'
import { characterPageReducers } from  '../app/pages/character/duck'

export default combineReducers({
  landingPage: landingPageReducers,
  chaptersPage: chaptersPageReducers,
  charactersPage: charactersPageReducers,
  characterPage: characterPageReducers,
  searchPage: searchPageReducers
})
