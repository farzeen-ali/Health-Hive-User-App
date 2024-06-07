/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import SimpleToast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import bcrypt from 'react-native-bcrypt';

import styles from './style';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    // Check for empty spaces and validate fields
    if (
      username.trim() === '' ||
      email.trim() === '' ||
      phoneNumber.trim() === '' ||
      password.trim() === '' ||
      emergencyContact.trim() === ''
    ) {
      SimpleToast.show('Fill all the fields without spaces');
      return false;
    }

    // Check phone number length
    if (phoneNumber.length !== 10) {
      SimpleToast.show('Phone number must be exactly 10 digits');
      return false;
    }

    // Check email format
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      SimpleToast.show('Enter a valid email address');
      return false;
    }

    // Check emergency phone number length
    if (emergencyContact.length !== 11) {
      SimpleToast.show('Emergency contact number must be exactly 11 digits');
      return false;
    }

    // Check if password matches confirm password
    if (password !== confirmPassword) {
      SimpleToast.show('Passwords do not match');
      return false;
    }

    // Check if password has at least 6 characters
    if (password.length < 6) {
      SimpleToast.show('Password must be at least 6 characters');
      return false;
    }

    setLoading(true);

    try {
      const fullPhoneNumber = `+92${phoneNumber}`;
      // Check if the phone number is already registered
      const phoneSnapshot = await database()
        .ref('users')
        .orderByChild('phoneNumber')
        .equalTo(fullPhoneNumber)
        .once('value');
      if (phoneSnapshot.exists()) {
        setLoading(false);
        SimpleToast.show('Phone number already in use');
        return false;
      }

      // Check if the email is already registered
      const emailSnapshot = await database()
        .ref('users')
        .orderByChild('email')
        .equalTo(email)
        .once('value');
      if (emailSnapshot.exists()) {
        setLoading(false);
        SimpleToast.show('Email already in use');
        return false;
      }

      // Hash the password
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Register the user with Firebase Authentication
      const { user } = await auth().createUserWithEmailAndPassword(email, password);

      // Send email verification
      await user.sendEmailVerification();

      // Store user data in Firebase Realtime Database with a unique key
      const userData = {
        username: username,
        email: email,
        phoneNumber: fullPhoneNumber,
        emergencyContact: emergencyContact,
        password: hashedPassword,
      };

      await database().ref('users').child(user.uid).set(userData);

      setLoading(false);
      SimpleToast.show('Registration successful. Please check your email inbox to verify your email.');

      // Navigate to Login screen after registration
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      SimpleToast.show('Failed to register. Please try again.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
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
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Emergency Contact"
        value={emergencyContact}
        onChangeText={setEmergencyContact}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.disabledButton]}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Register</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;
