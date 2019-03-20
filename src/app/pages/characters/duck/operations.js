import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchCharacters: [''],
  fetchCharactersSuccess: ['characters'],
  fetchNextPage: ['page'],
  error: ['']
}, {
  prefix: `R&M Wiki/charactersPage`
});

export { Creators, Types }
