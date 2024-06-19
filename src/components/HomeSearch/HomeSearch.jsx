/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import search from './searchStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import moment from 'moment';
import { NativeModules } from 'react-native';
import axios from 'axios';

const { EmergencyCallModule } = NativeModules;

const HomeSearch = ({ currentLocation, phoneNumber }) => {
  const navigation = useNavigation();
  const [formattedAddress, setFormattedAddress] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCallPermission();
    }
    if (currentLocation) {
      fetchAddress(currentLocation.latitude, currentLocation.longitude);
    }
  }, [currentLocation]);

  const requestCallPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: 'Call Permission',
          message: 'This app needs access to your phone calls to make emergency calls.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Call permission granted');
      } else {
        console.log('Call permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchAddress = async (latitude, longitude) => {
    const API_KEY = 'AIzaSyCjDV8xreqH9D6m_oqnX8l6wb-39qEksXw';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      if (response.data.status === 'OK') {
        const address = response.data.results[0].formatted_address;
        setFormattedAddress(address);
      } else {
        throw new Error('Unable to fetch address');
      }
    } catch (error) {
      console.error('Error fetching address: ', error);
    }
  };

  const goToSearch = () => {
    navigation.navigate('Search');
  };

  const callSOS = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'No user phone number found');
      return;
    }

    Alert.alert(
      'Confirm SOS Call',
      'Are you sure you want to make an emergency call?',
      [
        {
          text: 'No',
          onPress: () => console.log('SOS Call Cancelled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            const emergencyData = {
              emergencyContact: phoneNumber,
              location: formattedAddress || currentLocation,
              timestamp: moment().format('h:mm a DD/MM/YYYY'),
            };
            database()
              .ref(`sosEmergencies/${phoneNumber}`)
              .push(emergencyData)
              .then(() => {
                console.log('Emergency data saved successfully');
                EmergencyCallModule.makeEmergencyCall(phoneNumber);
              })
              .catch(error => {
                console.error('Error saving emergency data: ', error);
              });
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View>
      {/* Search Box */}
      <Pressable onPress={goToSearch} style={search.inputBox}>
        <Text style={search.inputText}>Emergency! Call Ambulance</Text>
        <View style={search.iconContainer}>
          <MaterialCommunityIcons name={'car-emergency'} size={26} color={'white'} />
        </View>
      </Pressable>
      {/* SOS Button */}
      <Pressable onPress={callSOS} style={search.inputBox}>
        <Text style={search.inputText}>No Internet! Press Here (SOS)</Text>
        <View style={search.iconContainer}>
          <MaterialIcons name={'emergency-share'} size={26} color={'white'} />
        </View>
      </Pressable>
    </View>
  );
};

export default HomeSearch;
