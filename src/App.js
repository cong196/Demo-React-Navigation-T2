import React, { Component } from 'react';
import {
    View,
    Text,ActivityIndicator
} from 'react-native';
import {MainStack,SideMenu} from './Router';
export default class App extends Component {
    render() {
        return (
            <SideMenu />
        )
    }
}
