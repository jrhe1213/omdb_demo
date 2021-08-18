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

function* fetchOMDBDetailSaga(action) {
  try {
    const params = {
      "i": action.payload.input
    }
    const response = yield call(api.fetchOMDBDetail, params)

    console.log("params: ", params)
    console.log("response: ", response)

    if (response.Data) {
      if (response.Data.Response == "True") {
        yield put(actions.fetchOMDBDetailSuccess(response.Data))
      } else {
        yield put(actions.fetchOMDBDetailError(response.Data.Error))
      }
    } else {
      yield put(actions.fetchOMDBDetailError(response.Message))
    }
  } catch (err) {
    yield put(actions.fetchOMDBDetailError(err))
  }
}

export function* DetailPageSaga() {
  yield takeLatest(constants.FETCH_OMDB_DETAIL, fetchOMDBDetailSaga)
}