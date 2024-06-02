/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Search from '../screens/Search/Search';
import Main from '../screens/Main/Main';

const Stack = createStackNavigator();

const HomeNavigator = ({ phoneNumber }) => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen">
        {(props) => <HomeScreen {...props} phoneNumber={phoneNumber} />}
      </Stack.Screen>
        <Stack.Screen name={'Search'} component={Search} />
        <Stack.Screen name="Main">
        {(props) => <Main {...props} phoneNumber={phoneNumber} />}
      </Stack.Screen>
      </Stack.Navigator>
  );
};

export default HomeNavigator;

