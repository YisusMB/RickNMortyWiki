import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchData: [''],
  fetchDataSuccess: ['chapters', 'characters'],
  error: ['']
}, {
  prefix: `R&M Wiki/searchPage`
})

export { Creators, Types }
