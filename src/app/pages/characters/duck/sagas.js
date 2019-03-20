import { all, put, takeEvery } from 'redux-saga/effects'
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

function * fetchNextPage (nextPage) {
  const { page } = nextPage;
  try {
    if (page === '') {
      const characters = yield fetch('https://rickandmortyapi.com/api/character/').then(res => res.json());
      if (!characters) {
        return
      }
      yield put(Creators.fetchCharactersSuccess(characters))
    } else {
      const characters = yield fetch(page).then(res => res.json());
      if (!characters) {
        return
      }
      yield put(Creators.fetchCharactersSuccess(characters))
    }
  } catch (error) {
    console.info(error)
  }
}

export default function * charactersPageSaga () {
  yield all([
    takeEvery(Types.FETCH_CHARACTERS, fetchCharacters),
    takeEvery(Types.FETCH_NEXT_PAGE, fetchNextPage)
  ])
}
