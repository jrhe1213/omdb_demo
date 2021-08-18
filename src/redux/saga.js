import { all, fork } from "redux-saga/effects"

// Pages
import { HomePageSaga } from "../pages/homePage/sagas"
import { DetailPageSaga } from "../pages/detailPage/sagas"

export default function* rootSaga() {
  yield all([
    fork(HomePageSaga),
    fork(DetailPageSaga),
  ])
}
