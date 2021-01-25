import * as SecureStore from 'expo-secure-store'

export const CLIENT_API_URL = "http://161.35.120.102:3000"

const post = async (url, options) => {
  const req = await fetch(CLIENT_API_URL + url, {
    method: 'POST',
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
    ...options
  })

  const response = await req.json()
  return response
}

const put = async (url, headers, options) => {
  const req = await fetch(CLIENT_API_URL + url, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    ...options
  })

  const response = await req.json()
  return response
}

const facebookGraph = async (token, field) => {
  let request
  if(field) {
    request = await fetch(`https://graph.facebook.com/me/${field}&access_token=${encodeURIComponent(token)}`)
  } else {
    request = await fetch(`https://graph.facebook.com/me?fields=name,birthday,picture&access_token=${encodeURIComponent(token)}`)
  }

  const data = await request.json()
  return data
}

export default {
  post, put, facebookGraph
}