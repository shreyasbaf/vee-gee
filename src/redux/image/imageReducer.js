import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE
} from './imageTypes'

const initialState = {
    loading: false,
    users: [],
    error: ''
  }

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGES_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_IMAGES_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_IMAGES_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
        default: return state
    }
  }

  export default imageReducer