import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import palette from '../../config/palette'
import CheckmarkIcon from '../../assets/img/check.svg'

export default class Radio extends React.Component {

  constructor(props) {
    super(props) 
  }

  state = {
    selected: false
  }

  componentDidMount() {
    this.setState({
      selected: this.props.selected
    })
  }

  componentDidUpdate(props) {
    const { selected } = this.props
    if(props.selected !== selected)
      this.setState({ selected })
  }

  render() {

    const { label, onSelect } = this.props
    const { selected } = this.state

    return (
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <View style={styles.checkmarkCircle}>
            {selected && <CheckmarkIcon />}
          </View>
          <Text style={{ marginLeft: 15, flex: 1, color: palette.black, fontFamily: 'NunitoBold', fontSize: 18, opacity: selected ? 1 : 0.5 }}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  checkmarkCircle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
  }
})