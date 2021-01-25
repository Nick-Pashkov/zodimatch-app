import React from 'react'
import { View, Text } from 'react-native'

export default class Error extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    message: "",
    code: ""
  }

  componentDidMount() {
    this.setState({
      message: this.props.error.message,
      code: this.props.error.code
    })
  }

  componentDidUpdate(props) {
    const { error } = props
    console.log(error)
    if(this.props.error.message !== this.state.message)
      this.setState({
        message: error.message,
        code: error.code
      })
  }

  render() {

    const { message, code } = this.state

    return (
      <View style={{ borderRadius: 20, height: 60, backgroundColor: '#D13F62', justifyContent: 'center', paddingHorizontal: 20, marginBottom: 20 }}>
        <Text style={{ color: 'white', lineHeight: 20 }}>
          {code == "auth/wrong-password" && "Contraseña incorrecta!"}
          {code == "auth/weak-password" && "La contraseña debe tener al menos 6 caracteres!"}
          {code == "auth/invalid-email" && "Correo inválido!"}
          {code == "auth/user-not-found" && "El usuario con este correo no fue encontrado!"}
          {code == "auth/passwords-match" && "Las contraseñas no coinciden!"}
          {code == "auth/email-already-in-use" && "El correo ya está siendo usado, ¿Ya eres miembro?"}
        </Text>
      </View>
    )
  }
}