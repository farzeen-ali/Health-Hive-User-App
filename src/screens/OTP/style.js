/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      color: '#AF1617',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
      color: '#555',
    },
    input: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#fff',
      textAlign: 'center',
      fontSize: 18,
    },
    button: {
      backgroundColor: '#AF1617',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    link: {
      marginTop: 20,
      textAlign: 'center',
      color: '#AF1617',
    },
  });
export default styles;

