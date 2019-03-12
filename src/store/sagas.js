import { fork, all } from 'redux-saga/effects'
import { landingPageSaga } from '../app/pages/landingPage/duck'

export default function * rootSaga () {
  yield all([
    fork(landingPageSaga),
  ])
}
