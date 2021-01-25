import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'
import * as SecureStore from 'expo-secure-store'
import { Context } from '../context'
import Api, { CLIENT_API_URL } from '../Api'
import firebase from 'firebase'

import Acuario from '../../assets/img/acuario.svg'
import Aries from '../../assets/img/aries.svg'
import Cancer from '../../assets/img/cancer.svg'
import Capricornio from '../../assets/img/capricornio.svg'
import Escorpio from '../../assets/img/escorpio.svg'
import Geminis from '../../assets/img/geminis.svg'
import Leo from '../../assets/img/leo.svg'
import Libra from '../../assets/img/libra.svg'
import Piscis from '../../assets/img/piscis.svg'
import Sagitario from '../../assets/img/sagitario.svg'
import Tauro from '../../assets/img/tauro.svg'
import Virgo from '../../assets/img/virgo.svg'

import {H1, P} from '../Components/Text'
import Error from '../Components/Error'

import palette from '../../config/palette'

export default class Login extends React.Component {
  static contextType = Context

  state = {
    sign: null
  }

  constructor(props) {
    super(props)
  }

  setSign = (sign) => {
    this.setState({sign})
  }

  render() {

    const { sign } = this.state
    const { navigation } = this.props

    return (
      <SafeAreaView style={{ flex: 1, minHeight: Math.round(Dimensions.get('window').height) }}>
            
        <View style={{ flex: 1, padding: 30, justifyContent: 'center' }}>
          <View style={{ marginBottom: 30 }}>
            <H1>¿Cuál es tu signo?</H1>
          </View>
          <View style={{ justifyContent: 'space-between', paddingHorizontal: 20, flex: 1 }}>
            <View style={styles.row}>
              <Acuario opacity={sign == "acuario" ? 1 : 0.3} onPress={() => this.setState({sign: "acuario"})}/>
              <Aries opacity={sign == "aries" ? 1 : 0.3} onPress={() => this.setState({sign: "aries"})}/>
              <Cancer opacity={sign == "cancer" ? 1 : 0.3} onPress={() => this.setState({sign: "cancer"})}/>
            </View>
            <View style={styles.row}>
              <Capricornio opacity={sign == "capricornio" ? 1 : 0.3} onPress={() => this.setState({sign: "capricornio"})}/>
              <Escorpio opacity={sign == "escorpio" ? 1 : 0.3} onPress={() => this.setState({sign: "escorpio"})}/>
              <Geminis opacity={sign == "geminis" ? 1 : 0.3} onPress={() => this.setState({sign: "geminis"})}/>
            </View>
            <View style={styles.row}>
              <Leo opacity={sign == "leo" ? 1 : 0.3} onPress={() => this.setState({sign: "leo"})}/>
              <Libra opacity={sign == "libra" ? 1 : 0.3} onPress={() => this.setState({sign: "libra"})}/>
              <Piscis opacity={sign == "piscis" ? 1 : 0.3} onPress={() => this.setState({sign: "piscis"})}/>
            </View>
            <View style={styles.row}>
              <Sagitario opacity={sign == "sagitario" ? 1 : 0.3} onPress={() => this.setState({sign: "sagitario"})}/>
              <Tauro opacity={sign == "tauro" ? 1 : 0.3} onPress={() => this.setState({sign: "tauro"})}/>
              <Virgo opacity={sign == "virgo" ? 1 : 0.3} onPress={() => this.setState({sign: "virgo"})}/>
            </View>
          </View>
          <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center' }}>
            {sign && 
              <P>Seleccionaste: <Text style={{ color: 'white' }}> {sign.toUpperCase()}</Text></P>
            }
          </View>
          <View style={{ padding: 30, justifyContent: 'center' }}>
            <Button disabled={!sign} onPress={() => navigation.navigate('Compatibility Table', {sign})}>
              <Text style={{ color: palette.white, fontFamily: 'NunitoBold', fontSize: 14 }}>SELECCIONAR</Text>
            </Button>
          </View>
          
          
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  }
})