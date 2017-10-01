import React, { Component } from 'react';
import {
    View,
    Text,TouchableOpacity
} from 'react-native';

export default class TaiKhoan extends Component {
    render() {
        return (
            <View style ={{flex:1}}>
                <Text style={{fontSize:40}}>
                    Màn hình home
                </Text>
                <TouchableOpacity
                    onPress={()=>{ this.props.navigation.navigate('DrawerOpen'); }}
                >
                    <View style={{height: 50, width: 100, backgroundColor: 'yellow'}}>
                        <Text>open Drawer</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={()=>{ this.props.navigation.navigate('SanPham')  }}
                >
                    <View style={{height: 50, width: 100, backgroundColor: 'red'}}>
                        <Text>goto ChiTiet</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{ this.props.navigation.navigate('Account', { hoten: 'Hoang Van Cong' })}}
                >
                    <View style={{height: 50, width: 100, backgroundColor: 'yellow'}}>
                        <Text>goto TaiKhoan</Text>
                    </View>
                </TouchableOpacity>
           	</View>
        )
    }
}
