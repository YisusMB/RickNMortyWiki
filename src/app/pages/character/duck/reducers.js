import { createReducer } from 'reduxsauce'
import { Types } from './operations'

const INITIAL_STATE = {
  character: [],
  success: false,
  error: false,
  loading: true
};

const fetchCharacter = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
})

const fetchCharacterSuccess = (state = INITIAL_STATE, {character}) => ({
  ...state,
  character,
  loading: false
})

const error = (state = INITIAL_STATE) => ({
  ...state,
  success: true,
  error: true
})

const HANDLERS = {
  [Types.FETCH_CHARACTER]: fetchCharacter,
  [Types.FETCH_CHARACTER_SUCCESS]: fetchCharacterSuccess,
  [Types.ERROR]: error
}

export const reducers = createReducer(INITIAL_STATE, HANDLERS);
