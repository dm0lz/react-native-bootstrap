//import * as types from './actionTypes'
import { Actions, Scene, Router } from 'react-native-router-flux'
import{ AsyncStorage } from 'react-native'

export function add_pic_path_to_store(picture_path) {
  return { type: "ADD_PICTURE_TO_STORE", payload: picture_path }
}

export function add_cropped_pic_path_to_store(picture_path) {
  return { type: "ADD_CROPPED_PICTURE_TO_STORE", payload: picture_path }
}

export function postPicture(picture_path) {
  return function(dispatch) {
    dispatch(add_pic_path_to_store(picture_path))
    Actions.picture()
  }
}

export function storeCroppedPic(picture_path){
  return function(dispatch) {
    dispatch(add_cropped_pic_path_to_store(picture_path))
    Actions.croppedPicture()
  }
}
