import {
  createStore, applyMiddleware, compose,
} from 'redux'
import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducer"
import rootSaga from "./saga"
import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
middleware.push(logger)

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export default store