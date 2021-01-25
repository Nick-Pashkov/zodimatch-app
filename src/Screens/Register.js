import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'
import * as SecureStore from 'expo-secure-store'
import { Context } from '../context'
import Api, { CLIENT_API_URL } from '../Api'
import firebase from 'firebase'

import UserIcon from '../../assets/img/user-circle.svg'
import KeyIcon from '../../assets/img/key-solid.svg'

import {H1, P} from '../Components/Text'
import Error from '../Components/Error'

import palette from '../../config/palette'

export default class Login extends React.Component {
  static contextType = Context

  state = {
    email: "",
    password: "",
    repeatPassword: "",
    error: null
  }

  constructor(props) {
    super(props)
  }

  register = () => {
    const { email, password, repeatPassword } = this.state

    if(password !== repeatPassword) return this.setState({error: {code: "auth/passwords-match"}})

    firebase.auth().createUserWithEmailAndPassword(email, password).then(userCredential => {
      this.setState({error: null})
      console.log(userCredential.user)
      this.props.navigation.navigate("Choose Sign")
    })
    .catch(error => {
      console.log(error.code)
      this.setState({ error })
    })
  }

  render() {

    const { email, password, repeatPassword, error } = this.state
    const { navigation } = this.props

    return (
      <SafeAreaView style={{ flex: 1, minHeight: Math.round(Dimensions.get('window').height) }}>
            
        <View style={{ flex: 1, padding: 30, justifyContent: 'center' }}>
          <View style={{ marginBottom: 30 }}>
            <H1>Crea tu cuenta.</H1>
          </View>
          {error && <Error error={error} />}
          
          <TextInput onChangeText={text => this.setState({ email: text })} value={email} icon={UserIcon} placeholder="usuario@email.com" autoFocus={true} />
          <TextInput onChangeText={text => this.setState({ password: text })} value={password} icon={KeyIcon} placeholder="Contraseña" secureTextEntry={true} />
          <TextInput onChangeText={text => this.setState({ repeatPassword: text })} value={repeatPassword} icon={KeyIcon} placeholder="Confirmar Contraseña" secureTextEntry={true} />
          <View style={{ padding: 30, justifyContent: 'center' }}>
            <Button onPress={this.register}>
              <Text style={{ color: palette.white, fontFamily: 'NunitoBold', fontSize: 14 }}>REGISTRARSE</Text>
            </Button>
          </View>
          <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center' }}>
            <P>¿Ya eres miembro? <Text style={{ color: 'white' }} onPress={() => navigation.navigate("Login")}> Entrar</Text></P>
          </View>
          
        </View>
      </SafeAreaView>
    );
  }
}