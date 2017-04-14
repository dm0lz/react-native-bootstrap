import { ActionConst, Actions } from 'react-native-router-flux'
import initialState from './initialState'

export default function session(state = initialState, action={}) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        session: action.payload
      }
    case 'STORE_TOKEN':
      return {
        ...state,
        jwt: action.payload
      }
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        options: {
          auto: 'none',
          fields: {
            email: {
              label: 'Email',
              placeholder: 'jean@louis.com',
              hasError: true,
              error: action.payload.message,
              keyboardType: 'email-address'
            },
            password: {
              label: 'Password',
              placeholder: 'passw@rd',
              hasError: true,
              error: action.payload.message,
              password: true,
              secureTextEntry: true
            }
          }
        }

      }
    default:
      return state
  }
}
