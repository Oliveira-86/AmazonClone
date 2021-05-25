import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import ProductCard from '../../components/ProductCard';

import products from '../../data/products'



const HomeScreen = () => {
    return (
        <View style={{ padding: 10}}>
            <FlatList 
                data={products}
                renderItem={({ item }) => <ProductCard item={item} />}
                keyExtractor={({id}) => id}
            />    
        </View>
    )
}



export default HomeScreen
