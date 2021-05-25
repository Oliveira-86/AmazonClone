import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const QuantitySelector = ({quantity, setQuantity}: any) => {

    const onMinus = () => {
        setQuantity(Math.max(0, quantity -1))
    }

    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={onMinus}
            >
                <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable
                onPress={onPlus}
                style={styles.button}
            >
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 100,
        height: 35
    },

    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'
    },

    buttonText: {
        fontSize: 18
    },

    quantity: {
        color: '#007eb9'
    }
})

export default QuantitySelector;
