import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#E3ECEC",

    },

    row: {
        marginVertical: 7
    },

    label: {
        fontWeight: '600'
    },

    errorLabel: {
        color: 'red',
        fontWeight: '600'
    },

    input: {
        height: 35,
        backgroundColor: "#FFF",
        marginVertical: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 3
    },

    inputAddress: {
        height: 35,
        backgroundColor: "#FFF",
        padding: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 3
    }
});

export default styles;