import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

interface ButtonProps {
    text: string;
    onPress: () => void;
    stylesContainer?: Object; 
}

const Button = ({text, onPress, stylesContainer}: ButtonProps) => {
    return (
        <Pressable 
            style={[styles.container, stylesContainer]}
            onPress={onPress}
        >
            <Text style={styles.title}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e47911',
        marginVertical: 5,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b'
    },

    title: {
        fontSize: 18
    }
})

export default Button;
