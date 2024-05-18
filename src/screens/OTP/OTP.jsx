/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

const OTP = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = () => {
    // Add OTP verification logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Please enter the OTP sent to your phone number</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default OTP;
