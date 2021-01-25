import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default class CTextInput extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: '',
    focused: false
  }

  componentDidMount() {
    const { value, autoFocus } = this.props
    if(autoFocus) this.setState({ focused: true })
    //this.onChangeText(value)
  }

  onChangeText(text) {
    const { onChangeText } = this.props
    this.setState({value: text})
    onChangeText(text)
  }

  get icon() {
    const { icon } = this.props
    const { focused } = this.state

    if(icon) {
      const Icon = icon
      return <Icon opacity={focused ? 1 : 0.3} />
    }
  }

  render() {

    const { type = 'default', placeholder, autoFocus, textContentType } = this.props
    const { focused } = this.state

    return (
      <View style={[styles.inputField, focused && styles.focused]}>
        {this.icon}
        <TextInput
          autoFocus={autoFocus}
          autoCapitalize="none"
          autoCompleteType="off"
          style={{ flex: 1, color: 'white', fontFamily: 'NunitoSemiBold', fontSize: 15, paddingLeft: 10 }}
          keyboardType={type}
          onChangeText={text => this.onChangeText(text)}
          onFocus={() => this.setState({focused: true})}
          onBlur={() => this.setState({focused: false})}
          value={this.state.value}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.3)"
          {...this.props}
        />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  inputField: {
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#3F3967",
    borderWidth: 1,
  },
  focused: {
    backgroundColor: "#3F3967",
    borderRadius: 25,
    borderColor: "transparent",
  }
})