import { call, put, takeLatest, select } from "redux-saga/effects"

import api from "./api"
import actions from "./actions"
import constants from "./constants"
import * as selectors from "./selectors"

function* demo2Saga(action) {
  try {

  } catch (err) {

  }
}

export function* DetailPageSaga() {
  yield takeLatest(constants.DEMO_2, demo2Saga)
}
