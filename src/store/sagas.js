import { fork, all } from 'redux-saga/effects'
import { landingPageSaga } from '../app/pages/landingPage/duck'
import {searchPageSaga} from "../app/pages/searchPage/duck";

export default function * rootSaga () {
  yield all([
    fork(landingPageSaga),
    fork(searchPageSaga)
  ])
}
