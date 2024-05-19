import 'react-native-gesture-handler';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import React, {useEffect} from 'react';
// import {enableLatestRenderer} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// Navigation
import Authentication from './src/navigation/Authentication';
import {NavigationContainer} from '@react-navigation/native';

// enableLatestRenderer();
// navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
  // const androidPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Health Hive Location Permission',
  //         message: 'Health Hive needs access to your location',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the location');
  //     } else {
  //       console.log('Location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     androidPermission();
  //   } else {
  //     // IOS
  //     Geolocation.requestAuthorization();
  //   }
  // }, []);
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
