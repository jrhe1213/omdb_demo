import constants from "./constants"

export default {
  fetchOMDBDetail: input => ({
    type: constants.FETCH_OMDB_DETAIL,
    payload: {
      input
    }
  }),

  fetchOMDBDetailSuccess: res => ({
    type: constants.FETCH_OMDB_DETAIL__SUCCESS,
    payload: {
      response: res
    }
  }),

  fetchOMDBDetailError: error => ({
    type: constants.FETCH_OMDB_DETAIL__ERROR,
    payload: {
      error
    }
  }),
}