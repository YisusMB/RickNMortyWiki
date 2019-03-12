import { createReducer } from 'reduxsauce'
import { Types } from './operations'

const INITIAL_STATE = {
  chapters: [],
  characters: [],
  success: false,
  error: false,
  loading: true
}

const fetchChapters = (state = INITIAL_STATE, { url }) => ({
  ...state,
  url
})

const fetchCharacters = (state = INITIAL_STATE, { url }) => ({
  ...state,
  url
})

const fetchChaptersSuccess = (state = INITIAL_STATE, { chapters }) => ({
  ...state,
  chapters,
})

const fetchCharactersSuccess = (state = INITIAL_STATE, { characters }) => ({
  ...state,
  characters,
  loading: false,
})

const error = (state = INITIAL_STATE) => ({
  ...state,
  success: true,
  error: true
})

const HANDLERS = {
  [Types.FETCH_CHAPTERS]: fetchChapters,
  [Types.FETCH_CHAPTERS_SUCCESS]: fetchChaptersSuccess,
  [Types.FETCH_CHARACTERS]: fetchCharacters,
  [Types.FETCH_CHARACTERS_SUCCESS]: fetchCharactersSuccess,
  [Types.ERROR]: error
}

export const reducers = createReducer(INITIAL_STATE, HANDLERS);
