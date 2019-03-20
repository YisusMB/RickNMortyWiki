import { createReducer } from 'reduxsauce'
import { Types } from './operations'

const INITIAL_STATE = {
  chapters: [],
  success: false,
  error: false,
  loading: true
};

const fetchCharacters = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})

const fetchNextPage = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})

const fetchCharactersSuccess = (state = INITIAL_STATE, {chapters}) => ({
  ...state,
  chapters,
  loading: false
})

const error = (state = INITIAL_STATE) => ({
  ...state,
  success: true,
  error: true
})

const HANDLERS = {
  [Types.FETCH_CHARACTERS]: fetchCharacters,
  [Types.FETCH_CHARACTERS_SUCCESS]: fetchCharactersSuccess,
  [Types.FETCH_NEXT_PAGE]: fetchNextPage,
  [Types.ERROR]: error
}

export const reducers = createReducer(INITIAL_STATE, HANDLERS);
