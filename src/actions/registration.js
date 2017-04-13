//import * as types from './actionTypes';
import { Actions, Scene, Router } from 'react-native-router-flux'
import{ AsyncStorage } from 'react-native'

export function registrationSuccess() {
  return { type: "REGISTRATION_SUCCESS", payload: true }
}
export function registrationFailure(error) {
  return { type: "REGISTRATION_FAILURE", payload: error }
}
export function storeToken(token) {
  return { type: "STORE_TOKEN", payload: token }
}

export function registerUser(credentials) {
  return function(dispatch) {
    fetch("http://192.168.2.114:3000/api/v1/registrations", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.error.code == 607){
        dispatch(registrationFailure(responseData.error))
      }else{
        AsyncStorage.setItem('jwt', responseData.data.sessions.jwt, () => {
          AsyncStorage.getItem('jwt', (err, result) => {
            if(result){
              dispatch(registrationSuccess())
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
