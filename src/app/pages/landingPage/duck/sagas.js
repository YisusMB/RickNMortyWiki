import { all, call, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { Creators, Types } from './operations'

function * fetchData () {
  try {
    const chapters = yield fetch('https://rickandmortyapi.com/api/episode/').then(res=>res.json());
    if (!chapters) {
      return
    }
    const characters = yield fetch('https://rickandmortyapi.com/api/character/').then(res=>res.json());
    if (!characters) {
      return
    }
    yield put(Creators.fetchDataSuccess(chapters, characters))
  } catch (error) {
    console.info(error)
  }
}

export default function * landingPageSaga () {
  yield all([
    takeEvery(Types.FETCH_DATA, fetchData)
  ])
}
