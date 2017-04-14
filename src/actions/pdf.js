//import * as types from './actionTypes'
import { Actions, Scene, Router } from 'react-native-router-flux'
import{ AsyncStorage } from 'react-native'

export function add_pdf_to_store(pdf_path) {
  return { type: "ADD_PDF_TO_STORE", payload: pdf_path }
}

export function generatedPdf(pdf_path) {
  return function(dispatch) {

    dispatch(add_pdf_to_store(pdf_path))
    Actions.pdf()
  }
}
