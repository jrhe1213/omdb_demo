import * as ApiManager from "../../utils/apiManager"

export default {
  fetchOMDB: (params) => {
    return ApiManager.api(params)
  }
}