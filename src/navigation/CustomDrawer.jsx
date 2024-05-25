/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.username}>Farzeen Ali</Text>
          <Text style={styles.phone}>0310 2843036</Text>
        </View>
      </View>
      <Pressable onPress={() => { console.log('Emergency Contacts'); }} style={styles.menuItem}>
        <Text style={styles.menuText}>Emergency Contacts</Text>
      </Pressable>
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
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  phone: {
    color: '#fa8270',
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
    marginBottom: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CustomDrawer;
