/* eslint-disable prettier/prettier */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import search from './searchStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const HomeSearch = () => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate('Search');
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
      {/* Sos Button */}
      <Pressable style={search.inputBox}>
        <Text style={search.inputText}>No Internet! Press Here (SOS)</Text>
        <View style={search.iconContainer}>
            <MaterialIcons name={'emergency-share'} size={26} color={'white'} />
        </View>
      </Pressable>
    </View>
  );
};

export default HomeSearch;
