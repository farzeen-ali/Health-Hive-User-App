import React, {useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import moment from 'moment';
import {NativeModules} from 'react-native';

const {EmergencyCallModule} = NativeModules;

const HomeSearch = ({currentLocation, phoneNumber}) => {
  const navigation = useNavigation();
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCallPermission();
    }
  }, []);

  const requestCallPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: 'Call Permission',
          message:
            'This app needs access to your phone calls to make emergency calls.',
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

  const goToSearch = () => {
    console.log();
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
              location: currentLocation,
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
      {cancelable: false},
    );
  };

  return (
    <View>
      {/* Search Box */}
      <Pressable onPress={goToSearch} style={search.inputBox}>
        <Text style={search.inputText}>Emergency! Call Ambulance</Text>
        <View style={search.iconContainer}>
          <MaterialCommunityIcons
            name={'car-emergency'}
            size={26}
            color={'white'}
          />
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
