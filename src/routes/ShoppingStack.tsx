import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
            <Stack.Screen name="Address" component={AddressScreen} />
        </Stack.Navigator>
    )
}

export default ShoppingStack;
