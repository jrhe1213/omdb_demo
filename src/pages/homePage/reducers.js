import constants from "./constants"

const initialState = {
  demo: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case "123":
      return {
        ...state,
        demo: ["123"]
      }

    default:
      return state
  }
}
