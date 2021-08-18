import constants from "./constants"

export default {

  demo1: input => ({
    type: constants.DEMO_1,
    payload: {
    
    }
  }),

  demo1Success: res => ({
    type: constants.DEMO_1__SUCCESS,
    payload: {
    
    }
  }),

  demo1Error: error => ({
    type: constants.DEMO_1__ERROR,
    payload: {
    
    }
  }),
}