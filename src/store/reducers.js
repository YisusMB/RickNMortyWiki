import { combineReducers } from 'redux'
import { landingPageReducers } from '../app/pages/landingPage/duck'
import { searchPageReducers } from '../app/pages/searchPage/duck'

export default combineReducers({
  landingPage: landingPageReducers,
  searchPage: searchPageReducers
})
