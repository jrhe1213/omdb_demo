import constants from "./constants"

export default {
  fetchOMDB: input => ({
    type: constants.FETCH_OMDB,
    payload: {
      input
    }
  }),

  fetchOMDBSuccess: res => ({
    type: constants.FETCH_OMDB__SUCCESS,
    payload: {
      response: res
    }
  }),

  fetchOMDBError: error => ({
    type: constants.FETCH_OMDB__ERROR,
    payload: {
      error
    }
  }),
}