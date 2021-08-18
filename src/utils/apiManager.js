// lib
import axios from "axios"

// config
import * as config from "../config";

export const api = (params) => {
  return new Promise((resolve, reject) => {
    let headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    params.apikey = config.apikey
    axios
      .create({ headers })
      .get(config.omdb_url, params)
      .then(response => {
        if (response.status != 200) {
          reject({ Message: "API internal error" })
          return
        }
        resolve({
          Data: response.data,
        })
        return
      })
      .catch(error => {
        if (!error.response) {
          reject({ Message: "API external error" })
          return
        }
        if (!error.response.data) {
          reject({ Message: "API internal error" })
          return
        }
        reject(error.response.data)
        return
      })
  })
}