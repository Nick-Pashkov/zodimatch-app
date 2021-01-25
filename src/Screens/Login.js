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
    error: null
  }

  constructor(props) {
    super(props)
  }

  login = () => {
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password).then(userCredential => {
      this.setState({error: null})
      console.log(userCredential.user)
      this.props.navigation.navigate("Choose Sign")
    })
    .catch(error => {
      console.log(error.code)
      this.setState({error})
    })
  }

  render() {

    const { email, password, error } = this.state
    const { navigation } = this.props

    return (
      <SafeAreaView style={{ flex: 1, minHeight: Math.round(Dimensions.get('window').height) }}>
            
        <View style={{ flex: 1, padding: 30, justifyContent: 'center' }}>
          <View style={{ marginBottom: 30 }}>
            <H1>Entra o regístrate.</H1>
          </View>
          {error && <Error error={error} />}
          <TextInput onChangeText={text => this.setState({ email: text })} value={email} icon={UserIcon} placeholder="usuario@email.com" autoFocus={true} />
          <TextInput onChangeText={text => this.setState({ password: text })} value={password} icon={KeyIcon} placeholder="•••••••" secureTextEntry={true} />
          <View style={{ padding: 30, justifyContent: 'center' }}>
            <Button onPress={this.login}>
              <Text style={{ color: palette.white, fontFamily: 'NunitoBold', fontSize: 14 }}>ENTRAR</Text>
            </Button>
          </View>
          <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center' }}>
            <P>No tienes una cuenta? <Text style={{ color: 'white' }} onPress={() => navigation.navigate("Register")}> Crea una</Text></P>
          </View>
          
        </View>
      </SafeAreaView>
    );
  }
}