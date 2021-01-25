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
    sign: null,
    mySign: null,
    result: null
  }

  constructor(props) {
    super(props)
  }

  setSign = (sign) => {
    this.setState({sign})
    const { mySign } = this.state
    if(sign) {
      fetch(`http://192.168.100.182:8080/${mySign}/${sign}`).then(response => response.text()).then(result => {
        console.log(result)
        this.setState({ result })
      })
    }
  }

  componentDidMount() {
    const mySign = this.props.route.params.sign
    this.setState({mySign})
  }

  render() {

    const { sign, mySign, result } = this.state
    const { navigation } = this.props

    return (
      <SafeAreaView style={{ flex: 1, minHeight: Math.round(Dimensions.get('window').height) }}>
            
        <View style={{ flex: 1, padding: 30, justifyContent: 'center' }}>
          <View style={{ marginBottom: 30 }}>
            <H1>Compatibilidad</H1>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontFamily: 'NunitoBold' }}>Selecciona un signo para conocer que tan compatibles son</Text>
          </View>
          <View style={{ justifyContent: 'space-evenly', paddingHorizontal: 20, flex: 1 }}>
            <View style={styles.row}>
              <Acuario opacity={sign == "acuario" ? 1 : 0.3} onPress={() => this.setSign("acuario")}/>
              <Aries opacity={sign == "aries" ? 1 : 0.3} onPress={() => this.setSign("aries")}/>
              <Cancer opacity={sign == "cancer" ? 1 : 0.3} onPress={() => this.setSign("cancer")}/>
            </View>
            <View style={styles.row}>
              <Capricornio opacity={sign == "capricornio" ? 1 : 0.3} onPress={() => this.setSign("capricornio")}/>
              <Escorpio opacity={sign == "escorpio" ? 1 : 0.3} onPress={() => this.setSign("escorpio")}/>
              <Geminis opacity={sign == "geminis" ? 1 : 0.3} onPress={() => this.setSign("geminis")}/>
            </View>
            <View style={styles.row}>
              <Leo opacity={sign == "leo" ? 1 : 0.3} onPress={() => this.setSign("leo")}/>
              <Libra opacity={sign == "libra" ? 1 : 0.3} onPress={() => this.setSign("libra")}/>
              <Piscis opacity={sign == "piscis" ? 1 : 0.3} onPress={() => this.setSign("piscis")}/>
            </View>
            <View style={styles.row}>
              <Sagitario opacity={sign == "sagitario" ? 1 : 0.3} onPress={() => this.setSign("sagitario")}/>
              <Tauro opacity={sign == "tauro" ? 1 : 0.3} onPress={() => this.setSign("tauro")}/>
              <Virgo opacity={sign == "virgo" ? 1 : 0.3} onPress={() => this.setSign("virgo")}/>
            </View>
          </View>
          <View style={{ padding: 10 }}>
            {sign && (
              <View style={{justifyContent: 'space-between', flexDirection: 'row' }}>
                <P><Text style={{ color: 'white', fontFamily: 'NunitoBold' }}>{mySign.toUpperCase()}</Text> y <Text style={{ color: 'white', fontFamily: 'NunitoBold' }}>{sign.toUpperCase()}</Text></P>
                <Text style={{ color: 'white', fontFamily: 'NunitoBold' }}>{result}</Text>
              </View>
            )}
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