/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Search from '../screens/Search/Search';
import Main from '../screens/Main/Main';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Search'} component={Search} />
        <Stack.Screen name={'Main'} component={Main} />
      </Stack.Navigator>
  );
};

export default HomeNavigator;

