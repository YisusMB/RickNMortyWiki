import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchChapters: [''],
  fetchCharacters: [''],
  fetchChaptersSuccess: ['chapters'],
  fetchCharactersSuccess: ['characters'],
  error: ['']
}, {
  prefix: `R&M Wiki/landingPage`
})

export { Creators, Types }
