/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 28,
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#AF1617',
    },
    input: {
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingHorizontal: 15,
      marginVertical: 10,
      fontSize: 16,
      borderColor: '#ccc',
      borderWidth: 1,
    },
    phoneContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    countryCode: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: '#fff',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      borderColor: '#ccc',
      borderWidth: 1,
    },
    phoneInput: {
      flex: 1,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeftWidth: 0,
    },
    button: {
      backgroundColor: '#AF1617',
      paddingVertical: 15,
      borderRadius: 8,
      marginVertical: 10,
      alignItems: 'center',
    },
    disabledButton: {
      opacity: 0.6,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    forgotPassword: {
        color: '#AF1617',
        textAlign: 'right',
        marginBottom: 20,
    },
    link: {
      marginTop: 20,
      textAlign: 'center',
      color: '#AF1617',
      fontSize: 16,
    },
  });
export default styles;
