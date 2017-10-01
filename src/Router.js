import React from 'react';
import {
    View
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './Home';
import ChiTietSanPham from './ChiTietSanPham';
import TaiKhoan from './TaiKhoan';
import Menu from './Menu';

export const MainStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Account: {
        screen: TaiKhoan,
        navigationOptions: {
            headerTitle: 'Tài khoản'
        }
    },
    SanPham: {
        screen: ChiTietSanPham,
        navigationOptions: {
            headerTitle: 'Chi tiết sản phẩm'
        }
    },
});
export const SideMenu = DrawerNavigator (
    {
        MainSide: {
            screen: MainStack
        }
    },
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
)























