import React from 'react'

const Context = React.createContext()

class GlobalState extends React.Component {
  state = {
    user: null
  }

  setUser = (data) => {
    this.setState({user: data})
  }

  render() {
    return (
      <Context.Provider value={{
        ...this.state, 
        setUser: this.setUser,
        setSex: this.setSex
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export {
  Context,
  GlobalState
}