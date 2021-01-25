import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import CalendarIcon from '../../assets/img/calendar.svg'
import DownIcon from '../../assets/img/chevron-down.svg'

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    date: null,
    pickerShown: false
  }

  changeDate = (event, selectedDate) => {
    const { onChange } = this.props

    const currentDate = selectedDate || this.state.date
    this.setState({
      date: currentDate,
      pickerShown: false
    })

    onChange(currentDate)
  }

  showPicker = () => {
    this.setState({
      pickerShown: true
    })
  }

  get date() {
    const { date } = this.state
    if(!date) return "Seleccionar"
    const d = new Date(this.state.date)
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getUTCFullYear()
  }

  render() {
    return (
      <TouchableOpacity style={styles.field} onPress={this.showPicker}>
        <CalendarIcon width={24} height={24} style={styles.icon} />
        <Text style={styles.text}>
          {this.date}
        </Text>
        <DownIcon width={15} height={15} style={styles.icon} />
        {this.state.pickerShown && (
          <DateTimePicker
            mode='date'
            value={this.state.date ? this.state.date : Date.now()}
            onChange={this.changeDate}
          />
        )}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  field: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 40,
    borderRadius: 100,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4
  },
  icon: {

  },
  text: {
    fontFamily: 'NunitoBold',
    fontSize: 18
  }
})