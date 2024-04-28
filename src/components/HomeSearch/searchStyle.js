/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const search = StyleSheet.create({
    inputBox: {
        backgroundColor: '#AF1617',
        margin: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 60,
        color: '#fff',
        padding: 10,
        borderRadius: 50,
    },
});

export default search;
