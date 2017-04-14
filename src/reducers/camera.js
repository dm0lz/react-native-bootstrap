import { ActionConst, Actions } from 'react-native-router-flux'
import initialState from './initialState'

export default function session(state = initialState, action={}) {
  switch(action.type) {
    case 'ADD_PICTURE_TO_STORE':
      return {
        ...state,
        picture: action.payload
      }
    case 'ADD_CROPPED_PICTURE_TO_STORE':
      return {
        ...state,
        cropped_picture: action.payload
      }
    default:
      return state
  }
}
