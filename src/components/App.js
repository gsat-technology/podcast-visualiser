import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Search from './Search'
import PodcastChart from './PodcastChart'

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <PodcastChart />
      </div>
    )
  }
}
