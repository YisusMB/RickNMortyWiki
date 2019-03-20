import { fork, all } from 'redux-saga/effects'
import { landingPageSaga } from '../app/pages/landingPage/duck'
import { searchPageSaga } from '../app/pages/searchPage/duck'
import { chaptersPageSaga } from '../app/pages/chapters/duck'
import { charactersPageSaga } from '../app/pages/characters/duck'


export default function * rootSaga () {
  yield all([
    fork(landingPageSaga),
    fork(chaptersPageSaga),
    fork(charactersPageSaga),
    fork(searchPageSaga)
  ])
}
