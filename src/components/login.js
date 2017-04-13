import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight, Keyboard } from 'react-native'
import styles from '../stylesheet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions, Scene, Router } from 'react-native-router-flux'
import t from 'tcomb-form-native'
import * as sessionActions from '../actions/session'

var EmailValidator = t.refinement(t.String, function (s) {
  return /@/.test(s)
})
var PasswordValidator = t.refinement(t.String, function (s) {
  return s.length >= 5
})
var Form = t.form.Form;
var User = t.struct({
  email: EmailValidator,
  password: PasswordValidator
});

class Login extends Component {

  constructor(props){
    super(props)
    this._formSubmit = this._formSubmit.bind(this)
    this._formUpdatedWith = this._formUpdatedWith.bind(this)
    this.state =  {
      value: {
        email: '',
        password: ''
      }
    }
  }

  clearForm(){
    this.setState({value: {email: '', password: ''}})
  }

  static propTypes = {
    routes: PropTypes.object,
  };

  _formSubmit(event) {
    event.preventDefault()
    let value = this.refs.form.getValue()
    if(value){
      this.props.actions.logInUser(this.state.value)
      this.clearForm()
    }
  }

  _formUpdatedWith(value){
    this.setState({value: {email: value.email, password: value.password}})
  }

  componentDidMount() {
    if((this.props.session.session == true || this.props.registration.session == true)){
      Actions.main()
    }
    this.refs.form.getComponent('email').refs.input.focus()
  }

  render(){
    return(
      <View style={styles.login_container}>
        <Text style={styles.welcome} > Sign In </Text>
        <Form
          ref="form"
          type={User}
          value={this.state.value}
          options={this.props.session.options}
          onChange={this._formUpdatedWith}
        />
        <TouchableHighlight style={styles.button} onPress={this._formSubmit} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(({routes, session, registration}) => ({routes, session, registration}), mapDispatchToProps)(Login)
