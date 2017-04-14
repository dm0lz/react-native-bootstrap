import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import styles from '../stylesheet'
import { Actions } from 'react-native-router-flux'
import PDFView from 'react-native-pdf-view'

class Pdf extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>

        <PDFView ref={(pdf)=>{this.pdfView = pdf;}}
          src={this.props.pdf.pdf}
          onLoadComplete = {(pageCount)=>{
            this.pdfView.setNativeProps({
                zoom: 1
              });
          }}
          style={styles.pdf}
        />

      </View>
    )
  }
}

export default connect(({routes, pdf}) => ({routes, pdf}))(Pdf)
