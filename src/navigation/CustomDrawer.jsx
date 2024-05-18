/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('Login');
  };
    return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#AF1617', padding: 15}}>
        {/* user row */}
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <View style={{
                backgroundColor: 'grey',
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 15,
            }} />
                <View>
                    <Text style={{color: '#fff', fontSize: 24}}>Farzeen Ali</Text>
                    <Text style={{color: '#fa8270'}}>03102843036</Text>
                </View>
            </View>
        {/* emergency Contacts */}
        <Pressable onPress={() => {console.log('Emergency Contacts');}}>
            <Text style={{color: '#fff', marginVertical: 15}}>Emergency Contacts</Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 36 }}>
  <TouchableOpacity style={{ backgroundColor: '#AF1617', padding: 12, borderRadius: 8, alignItems: 'center' }} onPress={handleLogout}>
    <Text style={{ color: '#fff', fontSize: 18 }}>Logout</Text>
  </TouchableOpacity>
</View>

    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
