import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import palette from '../config/palette'
import '../config/firebase'
import * as SecureStore from 'expo-secure-store'
import { Context } from './context'
import Api from './Api'
import { StatusBar } from 'expo-status-bar'

import LoginScreen from './Screens/Login'
import RegisterScreen from './Screens/Register'
import ChooseSign from './Screens/ChooseSign'
import CompatibilityTable from './Screens/CompatibilityTable'

const Stack = createStackNavigator()

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.purple
  }
}

export default class App extends React.Component {

  static contextType = Context

  state = {
    hasLoaded: false
  }

  async componentDidMount() {
    
    this.setState({ hasLoaded: true })
  }

  logout = async () => {
    this.context.setUser(null)
  }

  render() {

    const user = this.context.user
    const { hasLoaded } = this.state

    return (
      <SafeAreaProvider>
        <StatusBar style="light" />
        {hasLoaded && (
          <NavigationContainer theme={Theme}>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Choose Sign" component={ChooseSign} options={{ headerShown: false }} />
              <Stack.Screen name="Compatibility Table" component={CompatibilityTable} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </SafeAreaProvider>
    )
  }
}