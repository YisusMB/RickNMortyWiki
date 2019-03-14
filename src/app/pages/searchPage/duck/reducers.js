import { createReducer } from 'reduxsauce'
import { Types } from './operations'

const INITIAL_STATE = {
  chapters: [],
  characters: [],
  success: false,
  error: false,
  loading: true
}

const fetchData = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})

const fetchDataSuccess = (state = INITIAL_STATE, {chapters, characters}) => ({
  ...state,
  chapters,
  characters,
  loading: false
})

const fetchSearch = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})

const fetchSearchSuccess = (state = INITIAL_STATE, {searchData}) => ({
  ...state,
  searchData,
  loading: false
})

const error = (state = INITIAL_STATE) => ({
  ...state,
  success: true,
  error: true
})

const HANDLERS = {
  [Types.FETCH_DATA]: fetchData,
  [Types.FETCH_DATA_SUCCESS]: fetchDataSuccess,
  [Types.FETCH_SEARCH]: fetchSearch,
  [Types.FETCH_SEARCH_SUCCESS]: fetchSearchSuccess,
  [Types.ERROR]: error
}

export const reducers = createReducer(INITIAL_STATE, HANDLERS);
