/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, View} from 'react-native';
import React from 'react';
import RouteMap from '../../components/RouteMap/RouteMap';
import AmbulanceTypes from '../../components/AmbulanceTypes/AmbulanceTypes';
import {useRoute} from '@react-navigation/native';

const Main = ({phoneNumber}) => {
  const route = useRoute();
  console.log(route.params);

  const {originPlace, destinationPlace} = route.params;
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
    <View style={{height: Dimensions.get('window').height - 466}}>
      <RouteMap origin={originPlace} destination={destinationPlace} />
    </View>
    <View style={{height: 400}}>
      <AmbulanceTypes origin={originPlace} phoneNumber={phoneNumber} destination={destinationPlace} />
    </View>
    </View>
  );
};

export default Main;
