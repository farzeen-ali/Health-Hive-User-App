/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login';
import RootNavigator from './RootNavigator';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';

const Stack = createStackNavigator();

const Authentication = () => {
  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
        <Stack.Screen name={'RootNavigator'} component={RootNavigator} />
      </Stack.Navigator>
  );
};

export default Authentication;
