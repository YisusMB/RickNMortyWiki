import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchChapters: [''],
  fetchChaptersSuccess: ['chapters'],
  fetchCharacters: [''],
  fetchCharactersSuccess: ['characters'],
  error: ['']
}, {
  prefix: `R&M Wiki/landingPage`
})

export { Creators, Types }
