/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/App';
export default class Tss extends Component {
  render() {
    return (
      
        <App />
        
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('Tss', () => Tss);
