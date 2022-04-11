import axios from 'axios'
import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE
} from './imageTypes'

export const fetchImages = () => {
  return (dispatch) => {
    dispatch(fetchImagesRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchImagesSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchImagesFailure(error.message))
      })
  }
}

export const fetchImage = (id) =>{
    return (dispatch) => {
        dispatch(fetchImagesRequest())
        axios
        .get(`https://jsonplaceholder.typicode.com/photos/2`)
        .then(response => {
            // response.data is the users
            const users = response.data
            dispatch(fetchImagesSuccess(users))
            })
        .catch(error => {
            // error.message is the error message
            dispatch(fetchImagesFailure(error.message))
            })
            
    }
}

export const fetchImagesRequest = () => {
  return {
    type: FETCH_IMAGES_REQUEST
  }
}

export const fetchImagesSuccess = users => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: users
  }
}

export const fetchImagesFailure = error => {
  return {
    type: FETCH_IMAGES_FAILURE,
    payload: error
  }
}