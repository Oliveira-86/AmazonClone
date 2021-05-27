import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {       
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5
    },

    content: {
        flexDirection: 'row',
    },

    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,

    },

    textContainer: {
        padding: 10,
        flex: 3
    },

    title: {
        fontSize: 16
    },

    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    star: {
        marginRight: 1,
        marginVertical: 7
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

    quantityContainer: {
        margin: 5
    }
});

export default styles;