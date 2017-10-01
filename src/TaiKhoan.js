import React, { Component } from 'react';
import {
    View,
    Text,ActivityIndicator
} from 'react-native';

export default class TaiKhoan extends Component {
    render() {
        return (
            <View style ={{flex:1}}>
                <Text style={{fontSize:40}}>
                    Màn hình tài khoản
                </Text>

                <Text>{this.props.navigation.state.params.hoten}</Text>
           	</View>
        )
    }
}
