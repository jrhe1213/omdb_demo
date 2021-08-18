import { 
  call, 
  put, 
  takeLatest, 
  // select, 
} from "redux-saga/effects"

import api from "./api"
import actions from "./actions"
import constants from "./constants"
// import * as selectors from "./selectors"

function* fetchOMDBSaga(action) {
  try {
    const params = {
      "s": action.payload.input || "marvel"
    }
    const response = yield call(api.fetchOMDB, params)
    if (response.Data) {
      if (response.Data.Response == "True") {
        yield put(actions.fetchOMDBSuccess(response.Data.Search))
      } else {
        yield put(actions.fetchOMDBSuccess([]))
      }
    } else {
      yield put(actions.fetchOMDBError(response.Message))
    }
  } catch (err) {
    yield put(actions.fetchOMDBError(err))
  }
}

export function* HomePageSaga() {
  yield takeLatest(constants.FETCH_OMDB, fetchOMDBSaga)
}
