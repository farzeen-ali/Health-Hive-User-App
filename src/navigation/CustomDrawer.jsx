/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
const CustomDrawer = (props) => {
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
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
