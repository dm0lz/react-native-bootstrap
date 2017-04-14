import { ActionConst, Actions } from 'react-native-router-flux'
import initialState from './initialState'

export default function pdf(state = initialState, action={}) {
  switch(action.type) {
    case 'ADD_PDF_TO_STORE':
      return {
        ...state,
        pdf: action.payload
      }
    default:
      return state
  }
}
