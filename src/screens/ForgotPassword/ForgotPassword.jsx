/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import bcrypt from 'react-native-bcrypt';
import database from '@react-native-firebase/database';
import styles from './style';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (phoneNumber.trim() === '' || newPassword.trim() === '') {
      SimpleToast.show('Please fill in all fields');
      return;
    }

    setLoading(true);

    const userRef = database().ref('users').orderByChild('phoneNumber').equalTo(phoneNumber);

    userRef.once('value', snapshot => {
      if (snapshot.exists()) {
        let userKey;
        snapshot.forEach(childSnapshot => {
          userKey = childSnapshot.key;
        });

        const hashedPassword = bcrypt.hashSync(newPassword, 10);

        database().ref(`users/${userKey}`).update({ password: hashedPassword })
          .then(() => {
            setLoading(false);
            SimpleToast.show('Password reset successfully');
            navigation.navigate('Login');
          })
          .catch(error => {
            setLoading(false);
            SimpleToast.show('Error resetting password');
            console.error(error);
          });
      } else {
        setLoading(false);
        SimpleToast.show('User not found');
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <View style={styles.phoneContainer}>
        <Text style={styles.countryCode}>+92</Text>
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={[styles.input, styles.phoneInput]}
        />
      </View>
      <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.disabledButton]}
        onPress={handleResetPassword}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Reset Password</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ForgotPassword;
