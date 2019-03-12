import { all, call, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { Creators, Types } from './operations'

function * fetchCharacters () {
  try {
    const characters = yield fetch('https://rickandmortyapi.com/api/character/').then(res=>res.json());
    if (!characters) {
      return
    }
    yield put(Creators.fetchCharactersSuccess(characters))
  } catch (error) {
    console.info(error)
  }
}

function * fetchChapters () {
  try {
    const chapters = yield fetch('https://rickandmortyapi.com/api/episode/').then(res=>res.json());
    if (!chapters) {
      return
    }
    yield put(Creators.fetchChaptersSuccess(chapters))
  } catch (error) {
    console.info(error)
  }
}

export default function * landingPageSaga () {
  yield all([
    takeEvery(Types.FETCH_CHARACTERS, fetchCharacters),
    takeEvery(Types.FETCH_CHAPTERS, fetchChapters)
  ])
}
