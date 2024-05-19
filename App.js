import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';
// Navigation
import Authentication from './src/navigation/Authentication';
import {NavigationContainer} from '@react-navigation/native';

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
