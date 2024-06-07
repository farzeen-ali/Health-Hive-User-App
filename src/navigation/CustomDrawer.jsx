/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const { phoneNumber } = props;

  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const snapshot = await database().ref('users').orderByChild('phoneNumber').equalTo(phoneNumber).once('value');
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const userId = Object.keys(userData)[0];
          setUsername(userData[userId].username);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [phoneNumber]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('session_token');
    await AsyncStorage.removeItem('phone_number');
    navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <View>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.phone}>{phoneNumber}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#AF1617',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: -5,
    justifyContent: 'center',
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  phone: {
    color: '#fff',
  },
  menuItem: {
    backgroundColor: '#AF1617',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#AF1617',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginTop: 450,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CustomDrawer;
