import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from '../stylesheet'
import { Actions } from 'react-native-router-flux'
import ImagePicker from 'react-native-image-crop-picker'
import * as cameraActions from '../actions/camera'

class Picture extends Component {

  constructor(props){
    super(props)
    /*this.state = {
      picture: ''
    }*/
  }

  showOpenCropper(){
    ImagePicker.openCropper({
      path: this.props.camera.picture,
      width: 300,
      height: 400
    }).then(image => {
      //console.log(image)
      //this.setState({picture: image.path})
      this.props.actions.storeCroppedPic(image.path)
    });
  }

  render(){
    return(
      <View style={styles.container}>

        <Image style={styles.image} source={{uri: this.props.camera.picture}}/>
        <TouchableHighlight style={styles.button} onPress={() => this.showOpenCropper()} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Crop Picture</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cameraActions, dispatch)
  }
}
export default connect(({routes, camera}) => ({routes, camera}), mapDispatchToProps)(Picture)
