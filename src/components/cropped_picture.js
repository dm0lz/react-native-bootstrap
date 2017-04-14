import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from '../stylesheet'
import { Actions } from 'react-native-router-flux'
import ImagePicker from 'react-native-image-crop-picker'
import * as cameraActions from '../actions/camera'

class CroppedPicture extends Component {

  constructor(props){
    super(props)

  }

  generatePdf(picture){
    console.log("generating pdf from " + picture)
    
  }

  render(){
    return(
      <View style={styles.container}>

        <Image style={styles.image} source={{uri: this.props.camera.cropped_picture}}/>
        <TouchableHighlight style={styles.button} onPress={() => this.generatePdf(this.props.camera.cropped_picture)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>generate Pdf</Text>
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
export default connect(({routes, camera}) => ({routes, camera}), mapDispatchToProps)(CroppedPicture)
