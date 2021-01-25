import * as FB from 'expo-facebook'
import * as SecureStore from 'expo-secure-store'
import Api from '../Api'

const facebookLogIn = async (context) => {

  const isLoggedIn = context.user ? true : false

  if(!isLoggedIn) {
    try {
      const {type, token, expires, permissions, declinedPermissions} = await FB.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email', 'user_birthday']
      })
      if(type === 'success') {
        const jwt = getJwt(token, context)
        await SecureStore.setItemAsync('token', jwt)
      }
    } catch({ message }) {
      alert(`Facebook Login Error: ${message}`)
    }
  } else {
    const jwt = getJwt(token, context)
    await SecureStore.setItemAsync('token', jwt)
  }
}

const getJwt = async (fbtoken, context) => {
  const request = await Api.post('/auth/facebook/token', {
    headers: {
      'Authorization': `Bearer ${fbtoken}`
    }
  })
  const jwt = request.token
  const user = await Api.facebookGraph(token)
  
  context.setUser(user)

  return jwt
}