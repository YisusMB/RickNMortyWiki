import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchCharacter: ['character'],
  fetchCharacterSuccess: ['character'],
  error: ['']
}, {
  prefix: `R&M Wiki/characterPage`
});

export { Creators, Types }
