import { all, put, takeEvery } from 'redux-saga/effects'
import { Creators, Types } from './operations'

function * fetchCharacter (characterId) {
  try {
    const [,,id] = characterId.character.split('/');
    console.log(id)
    const character = yield fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res=>res.json());
    if (!character) {
      return
    }
    yield put(Creators.fetchCharacterSuccess(character))
  } catch (error) {
    console.info(error)
  }
}


export default function * characterPageSaga () {
  yield all([
    takeEvery(Types.FETCH_CHARACTER, fetchCharacter),
  ])
}
