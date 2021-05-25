import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        padding: 10
    },
    
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },

    description: {
        marginVertical: 10,
        lineHeight: 20
    },

    quantitySelector: {
        marginVertical: 10
    },

    button: {
        marginVertical: 30
    }
})

export default styles;