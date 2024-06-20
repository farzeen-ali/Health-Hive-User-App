/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import database from '@react-native-firebase/database';
import AmbulanceTypeRow from '../AmbulanceTypeRow/AmbulanceTypeRow';
import SimpleToast from 'react-native-simple-toast';
import moment from 'moment';

const AmbulanceTypes = ({ origin, destination, phoneNumber }) => {
  const [typesData, setTypesData] = useState([]);
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database().ref('ambulanceTypes').once('value');
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map(key => ({ ...data[key], id: key }));
          setTypesData(dataArray);
        }
      } catch (error) {
        SimpleToast.show(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (type) => {
    setSelectedAmbulance(type);
  };

  const emergency = () => {
    if (selectedAmbulance) {
      const emergencyId = database().ref().child('emergencies').push().key;

      const emergencyData = {
        phoneNumber,
        selectedAmbulance: selectedAmbulance.type,
        origin: origin.data.description,
        destination: destination.data.description,
        emergencyId,
        time: moment().format('h:mm a DD-MM-YYYY'),
        status,
      };

      database().ref(`emergencies/${emergencyId}`).set(emergencyData)
        .then(() => {
          SimpleToast.show('Emergency data stored successfully!');
        })
        .catch((error) => {
          SimpleToast.show(`Error storing emergency data: ${error.message}`);
        });
    } else {
      SimpleToast.show('No ambulance selected');
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#AF1617" />
      </View>
    );
  }

  return (
    <View>
      {typesData.map((type) => (
        <Pressable key={type.id} onPress={() => handleSelect(type)}>
          <AmbulanceTypeRow type={type} isSelected={selectedAmbulance?.id === type.id} />
        </Pressable>
      ))}
      <TouchableOpacity
        onPress={emergency}
        style={{
          backgroundColor: '#AF1617',
          padding: 15,
          margin: 1,
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Emergency Call Ambulance
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AmbulanceTypes;
