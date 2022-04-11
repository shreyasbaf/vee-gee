import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    const data={
      name:'Shreyas',
      password:'Password'
    }
    axios.post('http://localhost:8080/vee-gee-login', data)
    // axios
      // .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        if(users == 'Error'){
        dispatch(fetchUsersFailure('Error Logging In'))
        }
        else{
          dispatch(fetchUsersSuccess(users))
        }
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const loginUser = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    const data={
      name:'Shreyas',
      password:'Password'
    }
    // axios
    // .get('https://jsonplaceholder.typicode.com/users')
    axios.post('http://localhost:8080/vee-gee-login', data)
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}