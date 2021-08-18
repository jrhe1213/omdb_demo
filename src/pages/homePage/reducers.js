import constants from "./constants"

const initialState = {
  isloading: true,
  omdb: [],
  error: null
}

export default (state = initialState, action) => {

  switch (action.type) {
    case constants.FETCH_OMDB:
      return {
        ...state,
        isloading: true,
      }

    case constants.FETCH_OMDB__SUCCESS:
      return {
        ...state,
        omdb: action.payload.response,
        isloading: false,
      }

    case constants.FETCH_OMDB__ERROR:
      return {
        ...state,
        isloading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}
