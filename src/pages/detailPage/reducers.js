import constants from "./constants"

const initialState = {
  isloading: true,
  omdb: {},
  error: null
}

export default (state = initialState, action) => {

  switch (action.type) {
    case constants.FETCH_OMDB_DETAIL:
      return {
        ...state,
        isloading: true,
      }

    case constants.FETCH_OMDB_DETAIL__SUCCESS:
      return {
        ...state,
        omdb: action.payload.response,
        isloading: false,
      }

    case constants.FETCH_OMDB_DETAIL__ERROR:
      return {
        ...state,
        isloading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}
