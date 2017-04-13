import { combineReducers } from 'redux'
import routes from './routes'
import session from './session'
import registration from './registration'

export default combineReducers({
  routes,
  session,
  registration
})
