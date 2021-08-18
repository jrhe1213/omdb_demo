import constants from "./constants"

const initialState = {
  demo2: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case "1234":
      return {
        ...state,
        demo2: ["1234"]
      }

    default:
      return state
  }
}
