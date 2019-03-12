import { combineReducers } from 'redux'
import { landingPageReducers } from '../app/pages/landingPage/duck'


export default combineReducers({
  landingPage: landingPageReducers
})
