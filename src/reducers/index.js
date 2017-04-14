import { combineReducers } from 'redux'
import routes from './routes'
import session from './session'
import registration from './registration'
import camera from './camera'

export default combineReducers({
  routes,
  session,
  registration,
  camera
})
