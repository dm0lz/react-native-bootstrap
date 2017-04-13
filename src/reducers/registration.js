import { ActionConst, Actions } from 'react-native-router-flux';

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
      },
      password_confirmation: {
        label: 'Password Confirmation',
        placeholder: 'passw@rd Validation',
        error: 'Password must be at least 5 characters long',
        password: true,
        secureTextEntry: true
      }
    }
  }
};

export default function registration(state = initialState, action={}) {
  switch(action.type) {
    case 'REGISTRATION_SUCCESS':
      return {
        ...state,
        session: action.payload
      }
    case 'STORE_TOKEN':
      return {
        ...state,
        jwt: action.payload
      }
    case 'REGISTRATION_FAILURE':
      //console.log(action.payload.message)
      return {
        ...state,
        options: {
          auto: 'none',
          fields: {
            email: {
              label: 'Email',
              placeholder: 'jean@louis.com',
              error: action.payload.message.join(" and "),
              hasError: true,
              keyboardType: 'email-address'
            },
            password: {
              label: 'Password',
              placeholder: 'passw@rd',
              error: action.payload.message.join(" and "),
              hasError: true,
              password: true,
              secureTextEntry: true
            },
            password_confirmation: {
              label: 'Password Confirmation',
              placeholder: 'passw@rd Validation',
              hasError: true,
              error: action.payload.message.join(" and "),
              password: true,
              secureTextEntry: true
            }
          }
        }

      }
    default:
      return state;
  }
}
