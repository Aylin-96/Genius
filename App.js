import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Header from './components/Header'
import Recent from './components/Recent'
import Saved from './components/Saved'

export default class App extends Component {
  render() {
    return(
      <View >
        <StatusBar backgroundColor='#fffc61' barStyle='dark-content'/>
        <Header/>
        <Recent/>
        <Saved/>
      </View>
    )
  }
}

