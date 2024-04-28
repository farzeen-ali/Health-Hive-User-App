/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const search = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 6,
        marginLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fa8270',
    },
    autoCompleteContainer: {
          position: 'absolute',
          top: 2,
          left: 10,
          right: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#AF1617',
      padding: 5,
      borderRadius: 50,
      marginRight: 11,
      marginTop: 17,
    },
  listView : {
    position: 'absolute',
    top: 105,
  },
    separator: {
      backgroundColor: '#efefef',
      height: 1,
    },
    locationText: {
      marginTop: 10,
    },
    circle: {
      width: 8,
      height: 8,
      backgroundColor: '#AF1617',
      position: 'absolute',
      top: 30,
      left: 15,
      borderRadius: 5,
    },
    line: {
      width: 1,
      height: 60,
      backgroundColor: '#fa8270',
      position: 'absolute',
      top: 35,
      left: 18,
    },
    square: {
      width: 8,
      height: 8,
      backgroundColor: '#AF1617',
      position: 'absolute',
      top: 95,
      left: 15,
    },
});
export default search;
