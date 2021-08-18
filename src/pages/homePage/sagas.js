import { call, put, takeLatest, select } from "redux-saga/effects"

import api from "./api"
import actions from "./actions"
import constants from "./constants"
import * as selectors from "./selectors"

function* demoSaga(action) {
  try {
    const params = {
      t: "Toronto"
    }
    const response = yield call(api.demo1, params)
    if (response) {
      yield put(actions.demo1Success(response))
    } else {
      yield put(actions.demo1Error(response))
    }
  } catch (err) {
    yield put(actions.demo1Error(err))
  }
}

export function* HomePageSaga() {
  yield takeLatest(constants.DEMO_1, demoSaga)
}
