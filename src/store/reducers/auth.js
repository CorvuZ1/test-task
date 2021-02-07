import { SIGN_IN_FAIL, SIGN_IN_SUCCESS } from "../actions/auth"

const initialState = {
  isAuth: false,
  message: ""
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case SIGN_IN_SUCCESS: return {
      ...state, 
      isAuth: action.payload.status, 
      message: action.payload.message
    }
    case SIGN_IN_FAIL: return {
      ...state, 
      message: action.payload.message, 
      isAuth: action.payload.status
    }
    default: return state
  }
}