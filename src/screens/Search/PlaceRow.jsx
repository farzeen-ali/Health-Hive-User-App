/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import search from './search.js';
const PlaceRow = ({ data }) => {
  return (
    <View style={search.row}>
      <View style={search.iconContainer}>
        <Entypo name="location-pin" size={20} color={'white'} />
      </View>
      <Text style={search.locationText}>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;


