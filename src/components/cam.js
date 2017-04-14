import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import styles from '../stylesheet'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import Camera from 'react-native-camera'
import * as cameraActions from '../actions/camera'

class Cam extends Component {

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => {
        //console.log(data.path)
        this.props.actions.postPicture(data.path)
      })
      .catch(err => console.error(err));
  }

  render(){
    return(
      <View style={styles.container}>

      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        type={Camera.constants.Type.front}
        playSoundOnCapture={true}
        >
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
      </Camera>

      </View>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cameraActions, dispatch)
  }
}
export default connect(({routes, session}) => ({routes, session}), mapDispatchToProps)(Cam)
