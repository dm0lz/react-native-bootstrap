import React, {Component, PropTypes} from 'react';
import {View, Text, AsyncStorage, TouchableHighlight, Keyboard} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from '../stylesheet';
import { bindActionCreators } from 'redux';
//import * as routeActions from '../actions/routeActions';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!(this.props.session.session == true || this.props.registration.session == true)){
      Actions.login()
    }
  }

  componentWillMount() {
    Keyboard.dismiss()
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Pictures page</Text>
        <Text>Store : {this.props.routes.scene.title}</Text>
        <TouchableHighlight style={styles.button} onPress={ () => Actions.camera() } underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Go to Camera</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(({routes, session, registration}) => ({routes, session, registration}), mapDispatchToProps)(Main);
