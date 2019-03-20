import { all, put, takeEvery } from 'redux-saga/effects'
import { Creators, Types } from './operations'

function * fetchCharacters () {
  try {
    const chapters = yield fetch('https://rickandmortyapi.com/api/character/').then(res=>res.json());
    if (!chapters) {
      return
    }
    yield put(Creators.fetchCharactersSuccess(chapters))
  } catch (error) {
    console.info(error)
  }
}

function * fetchNextPage (nextPage) {
  const { page } = nextPage;
  try {
    if (page === '') {
      const chapters = yield fetch('https://rickandmortyapi.com/api/character/').then(res => res.json());
      if (!chapters) {
        return
      }
      yield put(Creators.fetchCharactersSuccess(chapters))
    } else {
      const chapters = yield fetch(page).then(res => res.json());
      if (!chapters) {
        return
      }
      yield put(Creators.fetchCharactersSuccess(chapters))
    }
  } catch (error) {
    console.info(error)
  }
}

export default function * chaptersPageSaga () {
  yield all([
    takeEvery(Types.FETCH_CHARACTERS, fetchCharacters),
    takeEvery(Types.FETCH_NEXT_PAGE, fetchNextPage)
  ])
}
