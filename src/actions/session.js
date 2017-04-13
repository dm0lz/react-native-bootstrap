//import * as types from './actionTypes'
import { Actions, Scene, Router } from 'react-native-router-flux'
import{ AsyncStorage } from 'react-native'

export function loginSuccess() {
  return { type: "LOG_IN_SUCCESS", payload: true }
}
export function loginFailure(error) {
  return { type: "LOG_IN_FAILURE", payload: error }
}
export function storeToken(token) {
  return { type: "STORE_TOKEN", payload: token }
}

export function logInUser(credentials) {
  return function(dispatch) {
    fetch("http://192.168.2.114:3000/api/v1/sessions", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.error.code == 606){
        dispatch(loginFailure(responseData.error))
      }else{
        AsyncStorage.setItem('jwt', responseData.data.sessions.jwt, () => {
          AsyncStorage.getItem('jwt', (err, result) => {
            if(result){
              dispatch(loginSuccess())
              dispatch(storeToken(result))
              Actions.main()
            }
          })
        })
      }
    })
    .done()
  }
}
