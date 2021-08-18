import { combineReducers } from "redux"

import homePageReducer from "../pages/homePage/reducers"
import detailPageReducer from "../pages/detailPage/reducers"

export default combineReducers({
  home: homePageReducer,
  detail: detailPageReducer,
});
