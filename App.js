import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header.js';
import CryptoContainer from './src/components/CryptoContainer.js';
import Store from './src/Store.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
      </Provider>
    );
  }
}
