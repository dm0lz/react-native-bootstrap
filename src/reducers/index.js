import { combineReducers } from 'redux'
import routes from './routes'
import session from './session'
import registration from './registration'
import camera from './camera'
import pdf from './pdf'

export default combineReducers({
  routes,
  session,
  registration,
  camera,
  pdf
})
