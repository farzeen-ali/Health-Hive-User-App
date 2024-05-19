/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { Dimensions, View, PermissionsAndroid, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import HomeMap from '../../components/HomeMap/HomeMap';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import Geolocation from '@react-native-community/geolocation';

navigator.geolocation = require('@react-native-community/geolocation');

const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Health Hive Location Permission',
          message: 'Health Hive needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });
            console.log(currentLocation);
          },
          error => {
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    const checkPermission = async () => {
      if (Platform.OS === 'android') {
        await androidPermission();
      } else {
        // IOS
        Geolocation.requestAuthorization();
      }
    };
    checkPermission();
  }, []);

  return (
    <View>
      {currentLocation && (
        <View style={{ height: Dimensions.get('window').height - 218 }}>
          <HomeMap currentLocation={currentLocation} />
        </View>
      )}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
