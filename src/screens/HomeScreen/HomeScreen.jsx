/* eslint-disable prettier/prettier */
import {Dimensions, View} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap/HomeMap';
// import Message from '../../components/Message/Message';
import HomeSearch from '../../components/HomeSearch/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
    <View style={{height: Dimensions.get('window').height - 218}}>
      <HomeMap />
    </View>
    {/* Message */}
    {/* <Message /> */}
    {/* Bottom Component */}
    <HomeSearch />
    </View>
  );
};

export default HomeScreen;
