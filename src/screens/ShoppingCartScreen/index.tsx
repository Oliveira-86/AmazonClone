import React from 'react'
import { View, FlatList, Text, ScrollView } from 'react-native';
import Button from '../../components/Button';
import ProductCartCard from '../../components/ProductCartCard';

import { useNavigation } from '@react-navigation/native'

import products from '../../data/cart'

const ShoppingCartScreen = () => {

    const navigation = useNavigation();

    const onCheckout = () => {
        navigation.navigate('Address')
    }

    const totalPrice = products.reduce((summary, product) => (
        summary + product.item.price * product.quantity
    ), 0)

    return (
        <View style={{ padding: 10 }}>


            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCartCard data={item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>
                            Subtotal ({products.length} items): <Text style={{ color: '#e47911' }}>${totalPrice.toFixed(2)}</Text>
                        </Text>

                        <Button
                            text="Proceed to Checkout"
                            onPress={onCheckout}
                            stylesContainer={{ backgroundColor: '#f7e300', borderColor: '#f7e300' }}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default ShoppingCartScreen;
