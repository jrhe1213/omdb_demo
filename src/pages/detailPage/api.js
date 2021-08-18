import * as ApiManager from "../../utils/apiManager"

export default {
  fetchOMDBDetail: (params) => {
    return ApiManager.api(params)
  }
}