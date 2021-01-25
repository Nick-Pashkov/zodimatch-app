import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import palette from '../../config/palette'

const textType = (<Text />).type

export default class Button extends React.Component {

  state = {
    style: this.props.style,
    disabled: this.props.disabled
  }

  constructor(props) {
    super(props)
  }

  componentDidUpdate(props) {
    const { disabled } = this.props
    if(props.disabled !== disabled)
      this.setState({ disabled })
  }

  render() {

    const isDisabled = this.state.disabled

    if(!isDisabled) {
      return (
        <TouchableOpacity style={styles.base} onPress={this.props.onPress}>
          {this.props.children}
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={[styles.base, styles.disabled]} onPress={this.props.onPress} disabled={true}>
          {this.props.children}
        </TouchableOpacity>
      )
    }
  }
}

const styles = {
  base: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    borderRadius: 100,
    shadowColor: "#000",
    marginVertical: 5,
    backgroundColor: palette.purple500,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
  },

  disabled: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    elevation: 0,
  }
}