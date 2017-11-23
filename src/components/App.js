import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Search from './search'

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    )
  }
}
