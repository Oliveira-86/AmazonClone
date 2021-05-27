import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import QuantitySelector from '../QuantitySelector'

import styles from './styles';

interface ProductCartProps {
    data: {
        id: string;
        quantity: number;
        option?: string;
        item: {
            id: string;
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: number;
            oldPrice?: number;
        }
    }
}

const ProductCartCard = ({ data }: ProductCartProps) => {
    const {quantity: quantityProps, item} = data;

    const [quantity, setQuantity] = useState(quantityProps);

    return (

        <View style={styles.container}>
            <View style={styles.content}>

                <Image style={styles.image} source={{ uri: item.image }} />

                <View style={styles.textContainer}>
                    <Text style={styles.title} numberOfLines={3}>
                        {item.title}
                    </Text>

                    <View style={styles.ratingsContainer}>
                        {Array.from(Array(5).keys()).map((_, index) => (
                            <FontAwesome
                                style={styles.star}
                                name={index < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                                size={18}
                                color="#e47911"
                            />
                        ))}
                        <Text>{item.ratings}</Text>
                    </View>

                    <Text style={styles.price}>
                        from ${item.price}
                        {item.oldPrice && (
                            <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
                        )}
                    </Text>
                </View>

            </View>
            
            <View style={styles.quantityContainer} >
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </View>

        </View>

    )
}

export default ProductCartCard;
