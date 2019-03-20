import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchCharacters: [''],
  fetchCharactersSuccess: ['chapters'],
  fetchNextPage: ['page'],
  error: ['']
}, {
  prefix: `R&M Wiki/chaptersPage`
});

export { Creators, Types }
