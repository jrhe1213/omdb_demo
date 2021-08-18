import constants from "./constants"

const initialState = {
  demo: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case constants.DEMO_1:
      return {
        ...state,
        demo: ["123"]
      }

    case constants.DEMO_1__SUCCESS:
      return {
        ...state,
        demo: ["ok"]
      }

    case constants.DEMO_1__ERROR:
      return {
        ...state,
        demo: ["error"]
      }

    default:
      return state
  }
}
