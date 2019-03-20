import { createReducer } from 'reduxsauce'
import { Types } from './operations'

const INITIAL_STATE = {
  chapters: [],
  success: false,
  error: false,
  loading: true
};

const fetchChapters = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})

const fetchNextPage = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})

const fetchChaptersSuccess = (state = INITIAL_STATE, {chapters}) => ({
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
  [Types.FETCH_CHAPTERS]: fetchChapters,
  [Types.FETCH_CHAPTERS_SUCCESS]: fetchChaptersSuccess,
  [Types.FETCH_NEXT_PAGE]: fetchNextPage,
  [Types.ERROR]: error
}

export const reducers = createReducer(INITIAL_STATE, HANDLERS);
