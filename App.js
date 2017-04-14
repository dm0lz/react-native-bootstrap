import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import {Actions, Scene, Router, Modal} from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import styles from './src/stylesheet'
import Login from './src/components/login'
import Register from './src/components/register'
import Home from './src/components/home'
import Main from './src/components/main'
import Cam from './src/components/cam'
import Picture from './src/components/picture'
import CroppedPicture from './src/components/cropped_picture'
import allReducers from './src/reducers'

const RouterWithRedux = connect()(Router)
const middleware = [thunk]
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(allReducers)

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} direction="vertical" title="Authentication"  />
    <Scene key="register" component={Register} direction="vertical" title="Register" />
    <Scene key="home" component={Home} title="Home" initial={true}  />
    <Scene key="main" component={Main} title="Main" />
    <Scene key="camera" component={Cam} title="Camera" />
    <Scene key="picture" component={Picture} title="Picture" />
    <Scene key="croppedPicture" component={CroppedPicture} title="Cropped Picture" />
  </Scene>
);

class App extends React.Component {
  componentWillMount() {
    StatusBar.setHidden(true)
  }
  render() {
    return(
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
    )
  }
}

export default App
