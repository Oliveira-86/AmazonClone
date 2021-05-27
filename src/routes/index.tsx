import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import ShoppingStack from './ShoppingStack';
import ProductDetails from '../screens/ProductDetails';
import AddressScreen from '../screens/AddressScreen';

import Entypo from 'react-native-vector-icons/Entypo';


const Tab = createBottomTabNavigator();

const BottomBarNavigation = () => {
    return (
        <Tab.Navigator tabBarOptions={{showLabel: false, activeTintColor: '#e47911',inactiveTintColor: "#c2c2c2"}}>
            <Tab.Screen 
                name="Home" 
                component={HomeStack}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name='home' color={color} size={25} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Cart" 
                component={ShoppingStack} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name='shopping-cart' color={color} size={25} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Product" 
                component={ProductDetails} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name='menu' color={color} size={25} />
                    )
                }} 
            />
            <Tab.Screen 
                name="Formal"  
                component={AddressScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name='user' color={color} size={25} />
                    )
                }} 
            />
        </Tab.Navigator>
    );
};

export default BottomBarNavigation;
