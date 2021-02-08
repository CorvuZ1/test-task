import { GET_NEWS} from "../actions/news"

const initialState = {
  newsList: [],
  loading: true,
}

export default function newsReducer(state = initialState, action) {
  switch(action.type) {
    case GET_NEWS: return {
      ...state,
      newsList: action.payload.newsList,
      loading: action.payload.loading
    }
    default: return state
  }
}