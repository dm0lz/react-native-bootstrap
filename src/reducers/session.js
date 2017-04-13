import { ActionConst, Actions } from 'react-native-router-flux'

const initialState = {
  session: false,
  jwt: '',
  options: {
    auto: 'none',
    fields: {
      email: {
        label: 'Email',
        placeholder: 'jean@louis.com',
        error: 'Email format is not valid',
        keyboardType: 'email-address'
      },
      password: {
        label: 'Password',
        placeholder: 'passw@rd',
        error: 'Password must be at least 5 characters long',
        password: true,
        secureTextEntry: true
      }
    }
  }
}

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
