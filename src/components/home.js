import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import styles from '../stylesheet'
import { Actions } from 'react-native-router-flux'

class Home extends Component {

  componentDidMount() {
  }

  render(){
    return(
      <View style={styles.container}>

        <TouchableHighlight style={styles.button} onPress={() => Actions.login()} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={() => Actions.register()} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default connect(({routes, session, registration}) => ({routes, session, registration}))(Home)
