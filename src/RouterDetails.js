import React from 'react';
import {
    View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import TabChiTietSanPham from './TabChiTietSanPham';
import TabDanhGiaSanPham from './TabDanhGiaSanPham';

export const TbDetails = TabNavigator(
    {
        TabChiTiet: {
            screen: TabChiTietSanPham, // Khai báo màn hình sẽ hiện thị trong tab
            navigationOptions: {
                tabBarLabel: 'Chi Tiết', // Text tiêu đề của tab
                // Ta có thể đặt thêm icon cho tab bằng thuộc tính 
                // tabBarIcon
                // Ví dụ 
                // tabBarIcon: ({ tintColor }) => (
                //     <Image
                //       source={require('./notif-icon.png')}
                //       style={[styles.icon, {tintColor: tintColor}]}
                //     />
                //   ),
            }
        },
        TabDanhGia: {
            screen: TabDanhGiaSanPham, // Khai báo màn hình sẽ hiện thị trong tab
            navigationOptions: {
                tabBarLabel: 'Đánh giá' // Text tiêu đề của tab

            }
        }
    },
    // Phần tùy chỉnh Style cho tab
    {
        tabBarPosition: 'top',  
        tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: '#D2D8DD',
            }
        }
    }
);