/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AmbulanceTypeRow from '../AmbulanceTypeRow/AmbulanceTypeRow';
import typesData from '../../assets/data/types';
const AmbulanceTypes = () => {
  const emergency = () => {
    console.log('object');
  };
  return (
    <View>
      {
        typesData.map((type, i) => <AmbulanceTypeRow type={type} key={i} />)
      }
      <TouchableOpacity onPress={emergency}
        style={{
          backgroundColor: '#AF1617',
          padding: 15,
          margin: 1,
          alignItems: 'center',
          borderRadius: 10,
          // marginTop: -5,
        }}>
        <Text
         style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18,
         }}>Emergency Call Ambulance</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AmbulanceTypes;
