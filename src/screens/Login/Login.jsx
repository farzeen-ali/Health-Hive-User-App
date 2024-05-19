/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import bcrypt from 'react-native-bcrypt';
import styles from './style';

const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (phoneNumber.trim() === '' || password.trim() === '') {
      SimpleToast.show('Please fill in all fields');
      return;
    }

    setLoading(true);

    const userRef = database().ref('users').orderByChild('phoneNumber').equalTo(phoneNumber);

    userRef.once('value', snapshot => {
      setLoading(false);

      if (snapshot.exists()) {
        let userData;
        snapshot.forEach(childSnapshot => {
          userData = childSnapshot.val();
        });

        if (bcrypt.compareSync(password, userData.password)) {
          SimpleToast.show('Login Successful');
          navigation.navigate('RootNavigator');
        } else {
          SimpleToast.show('Invalid credentials');
        }
      } else {
        SimpleToast.show('Invalid credentials');
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, loading && styles.disabledButton]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;
