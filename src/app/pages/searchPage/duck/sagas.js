import { all, put, takeEvery } from 'redux-saga/effects'
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

function * fetchSearch ({ form }) {
  try {
    const { name, status, gender, specie } = form;
    const searchData = yield fetch(`https://rickandmortyapi.com/api/character/?${(name === '' ? '' : `name=${name}`)}&${(status === '' ? '' : `status=${status}`)}&${(gender === '' ? '' : `gender=${gender}`)}&${(specie === '' ? '' : `specie=${specie}`)}`).then(res=>res.json());
    const searchChapter = yield fetch(`https://rickandmortyapi.com/api/episode/${(name === '' ? 'UNRESOLVED_NAME' : typeof name == 'number' ? name : `?name=${name}` )}`).then(res=>res.json());
    if (!searchData || !searchChapter) {
      return
    }
    yield put(Creators.fetchSearchSuccess(searchData, searchChapter))
  } catch (error) {
    console.info(error)
  }
}

export default function * landingPageSaga () {
  yield all([
    takeEvery(Types.FETCH_DATA, fetchData),
    takeEvery(Types.FETCH_SEARCH, fetchSearch)
  ])
}
