import React from 'react';
import { Image, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface ProductItemProps {
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

const ProductCard = ({ item }: ProductItemProps) => {
    return (

        <View style={styles.container}>

            <Image style={styles.image} source={{ uri: item.image }} />

            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={3}>
                    {item.title}
                </Text>

                <View style={styles.ratingsContainer}>
                    {Array.from(Array(5).keys()).map((_, index) => (
                        <FontAwesome
                            style={styles.star}
                            name={index < Math.floor(item.avgRating, 1) ? 'star' : 'star-o' }
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

    )
}

export default ProductCard;
