import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR,
    DEPOSIT_MONEY,
  } from "../constants/postConstans";
  
  const initState = {
      request: false,
      success: false,
      message: null,
      data: [
          {
            //   id: "",
              name: "",
              money: 0
          }
      ]
  }
  
  const postReducers = (state = initState, action: any) => {
      switch (action.type) {
          case FETCH_POST_REQUEST:
              return {
                  ...state,
                  requesting: true
              }
          case FETCH_POST_SUCCESS:
              return {
                  ...state,
                  requesting: false,
                  success: true,
                  data: action.data
              }
          case FETCH_POST_ERROR:
              return {
                  ...state,
                  requesting: false,
                  message: action.message
              }
          case DEPOSIT_MONEY:
              return {
                  ...state,
                  payload: action.payload + 1000,
                  message: "nang tien"
              }
          default:
              return state
      }
  }
  
  export default postReducers