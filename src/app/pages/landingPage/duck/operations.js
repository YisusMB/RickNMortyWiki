import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchData: [''],
  fetchDataSuccess: ['chapters', 'characters'],
  error: ['']
}, {
  prefix: `R&M Wiki/landingPage`
})

export { Creators, Types }
