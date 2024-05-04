/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const row = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        // marginBottom: -2,
    },
    image: {
        height: 70,
        width: 70,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginLeft: 20,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    info: {
        color: '#AF1617',
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    tag: {
        height: 20,
        width: 20,
        resizeMode: 'cover',
    },
    price: {
        fontWeight: 'bold',
        // color: '#AF1617',
        fontSize: 18,
        marginLeft: 5,
    },

});

export default row;
