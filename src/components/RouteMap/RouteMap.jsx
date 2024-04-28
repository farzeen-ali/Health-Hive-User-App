/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCjDV8xreqH9D6m_oqnX8l6wb-39qEksXw';

const RouteMap = ({ origin, destination }) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      style={{
        flex: 1,
      }}
      initialRegion={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="hotpink"
        optimizeWaypoints={true}
      />
      <Marker coordinate={originLoc} title={'Origin'} />
      <Marker coordinate={destinationLoc} title={'Destination'} />
    </MapView>
  );
};
export default RouteMap;
