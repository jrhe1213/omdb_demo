import { call, put, takeLatest, select } from "redux-saga/effects"

import api from "./api"
import actions from "./actions"
import constants from "./constants"
import * as selectors from "./selectors"

function* demoSaga(action) {
  try {

  } catch (err) {

  }
}

export function* HomePageSaga() {
  yield takeLatest(constants.DEMO_1, demoSaga)
}
