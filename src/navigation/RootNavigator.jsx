/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const DummyScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.name}</Text>
    </View>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => (
        <CustomDrawer {...props} />
        )}>
        <Drawer.Screen name="Health Hive" component={HomeNavigator} />
        <Drawer.Screen name="Help">
          {() => <DummyScreen name={'Help'} />}
        </Drawer.Screen>
        <Drawer.Screen name="Profile">
          {() => <DummyScreen name={'Profile'} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

