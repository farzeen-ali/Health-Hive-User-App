/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import uuid from 'react-native-uuid';
import SimpleToast from 'react-native-simple-toast';
import database from '@react-native-firebase/database';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import bcrypt from 'react-native-bcrypt';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  const handleRegister = async () => {
    // Check for empty spaces
    if (
      username.trim() === '' ||
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
    // Check emergency phone number length
    if (emergencyContact.length !== 11) {
      SimpleToast.show('Phone number must be exactly 11 digits');
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

    // Encrypt the password before storing
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    let userData = {
      id: uuid.v4(),
      username,
      phoneNumber,
      password: hashedPassword,
      emergencyContact,
    };

    database()
      .ref(`/users/${userData.id}`)
      .set(userData)
      .then(() => SimpleToast.show('Registered Successfully'));
    navigation.navigate('OTP');
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;
