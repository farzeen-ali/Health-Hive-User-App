/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// import {View} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React from 'react';
import { Image } from 'react-native';
import ambulance from '../../assets/data/ambulance';

const HomeMap = () => {
  // const getAmbulanceImage = (type) => {
  //   if (type === 'Basic'){
  //    return require('../../assets/images/Basic.png');
  //   }
  //   if (type === 'Advance'){
  //    return require('../../assets/images/Advance.png');
  //   }
  //    return require('../../assets/images/Mortury.png');
  // };
  return (
    <MapView
       provider={PROVIDER_GOOGLE}
       showsUserLocation={true}
       style={{
        width: '100%',
        height: '100%',
       }}
       region={{
        latitude: 24.8580,
        longitude: 67.0276,
        latitudeDelta: 0.035,
        longitudeDelta: 0.0121,
       }}
     >
     {/* Rendering Ambulances */}
     {
      ambulance.map((amb) => (
        <Marker
        key={amb.id}
    coordinate={{latitude: amb.latitude, longitude: amb.longitude}}
  >
    <Image
      source={require('../../assets/images/ambulance-2.png')}
      style={{
        width: 40,
        height: 40,
        resizeMode: 'contain',
        transform: [{
            rotate: `${amb.heading}deg`,
        }],
        }}
      resizeMode="contain"
    />
  </Marker>
      ))}
     </MapView>
  );
};

export default HomeMap;
