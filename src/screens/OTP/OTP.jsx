/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import SimpleToast from 'react-native-simple-toast';

const OTP = ({ route }) => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const phoneNumber = route.params.phoneNumber;

  const handleVerifyOtp = async () => {
    try {
      if (!/^(\+92|0)\d{10}$/.test(phoneNumber)) {
        SimpleToast.show('Invalid phone number format');
        return;
      }

      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      await confirmation.confirm(otp);
      SimpleToast.show('OTP verified successfully');
      navigation.navigate('Login');
    } catch (error) {
      SimpleToast.show('Incorrect OTP. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>
        Please enter the OTP sent to {phoneNumber}
      </Text>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="#aaa" // Change this to your desired color
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Back to Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OTP;
