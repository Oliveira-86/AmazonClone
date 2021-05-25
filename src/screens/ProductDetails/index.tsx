import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import ImageCarousel from '../../components/ImageCarousel';
import QuantitySelector from '../../components/QuantitySelector';

import product from '../../data/product';
import Button from '../../components/Button';

import styles from './styles';

const ProductDetails = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    return (
        <ScrollView style={styles.container}>
            <Text>
                {product.title}
            </Text>

            <ImageCarousel images={product.images} />

            <Picker
                style={{marginVertical: 20, backgroundColor: '#e1e7e4', borderRadius: 10}}
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
                {product.options.map((option) => (
                    <Picker.Item label={option} value={option} />
                ))}

            </Picker>

            <Text style={styles.price}>
                from ${product.price}
                {product.oldPrice && (
                    <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
                )}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>

            <View style={styles.quantitySelector}>
                <QuantitySelector
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            </View>

            <View style={styles.button}>
                <Button
                    text="Add to Cart"
                    onPress={() => { console.log("add to cart") }}
                />
                <Button
                    text="Buy Now"
                    onPress={() => { console.log("Buy Now") }}
                />
            </View>
        </ScrollView>
    );
};

export default ProductDetails;
