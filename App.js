/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';
// Navigation
import Authentication from './src/navigation/Authentication';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Authentication />
      </NavigationContainer>
    </>
  );
};

export default App;










// Ignore specific warning
LogBox.ignoreLogs([
  'Using Math.random is not cryptographically secure! Use bcrypt.setRandomFallback to set a PRNG.',
]);
