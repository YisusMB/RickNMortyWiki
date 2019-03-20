import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchChapters: [''],
  fetchChaptersSuccess: ['chapters'],
  fetchNextPage: ['page'],
  error: ['']
}, {
  prefix: `R&M Wiki/chaptersPage`
});

export { Creators, Types }
