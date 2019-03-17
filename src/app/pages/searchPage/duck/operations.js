import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchData: [''],
  fetchDataSuccess: ['chapters', 'characters'],
  fetchSearch: ['form'],
  fetchSearchSuccess: ['searchData', 'searchChapter'],
  error: ['']
}, {
  prefix: `R&M Wiki/searchPage`
})

export { Creators, Types }
