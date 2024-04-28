/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const message = StyleSheet.create({
    container: {
        backgroundColor: '#AF1617',
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginBottom: 10,
    },
    learnMore: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default message;
