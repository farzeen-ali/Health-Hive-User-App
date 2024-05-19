import React, {useEffect, useState} from 'react';
import {View, Dimensions, Platform, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import HomeMap from '../../components/HomeMap/HomeMap';
import HomeSearch from '../../components/HomeSearch/HomeSearch';

const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
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
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setCurrentLocation({latitude, longitude});
            },
            error => {
              console.log(error);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const checkPermission = async () => {
      if (Platform.OS === 'android') {
        await requestLocationPermission();
      } else {
        // For iOS
        Geolocation.requestAuthorization();
      }
    };

    checkPermission();
  }, []);

  return (
    <View>
      {currentLocation && (
        <>
          <View style={{height: Dimensions.get('window').height - 218}}>
            <HomeMap currentLocation={currentLocation} />
          </View>
          <HomeSearch currentLocation={currentLocation} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
