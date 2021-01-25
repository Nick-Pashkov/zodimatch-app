import React from 'react'
import { Text } from 'react-native'
import palette from '../../config/palette'

export const H1 = ({children, style}) => {
  return (
    <Text style={{ fontFamily: 'Bodoni', fontSize: 32, color: palette.white, textAlign: "center" }}>
      {children}
    </Text>
  )
}

export const H2 = ({children, style}) => {
  return (
    <Text style={{...style, fontFamily: 'NunitoBold', fontSize: 25, color: palette.black  }}>
      {children}
    </Text>
  )
}

export const H5 = ({children, style}) => {
  return (
    <Text style={{...style, fontFamily: 'NunitoBold', fontSize: 16, color: palette.black  }}>
      {children}
    </Text>
  )
}



export const P = ({children, style}) => {
  return (
    <Text style={{ fontFamily: 'NunitoBold', color: "#8C8C8C"  }}>
      {children}
    </Text>
  )
}