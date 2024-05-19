/* eslint-disable prettier/prettier */
import { View, SafeAreaView } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import search from './search';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const Search = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();
  const memoizedNavigation = useMemo(() => navigation, [navigation]);
  useEffect(() => {
    if (originPlace && destinationPlace){
      memoizedNavigation.navigate('Main', {
        originPlace,
        destinationPlace,
      });
    }
  },[originPlace, destinationPlace, memoizedNavigation]);
  return (
    <SafeAreaView>
      <View style={search.container}>
      {/* Where From */}
      <GooglePlacesAutocomplete
      placeholder="Where From?"
      onPress={(data, details = null) => {
        setOriginPlace({data, details});
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      styles={{
        textInput: search.textInput,
        container: search.autoCompleteContainer,
        listView: search.listView,
        separator: search.separator,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyCjDV8xreqH9D6m_oqnX8l6wb-39qEksXw',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data}/>}
      renderDescription={
          (data) => data.description || data.vicinity
        }
    />
      {/* Where To */}
        <GooglePlacesAutocomplete
      placeholder="Where To?"
      onPress={(data, details = null) => {
        setDestinationPlace({data, details});
      }}
      suppressDefaultStyles
      enablePoweredByContainer={false}
      styles={{
        textInput: search.textInput,
        container: {
          ...search.autoCompleteContainer, top: 65,
        },
        separator: search.separator,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyD7yH0E6HJSUW7YHFGdCr_U5_knbL7xXx0',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data}/>}
    />
    {/* Circle Design */}
      <View style={search.circle} />
    {/* Line Design */}
    <View style={search.line} />
    {/* Square Design */}
    <View style={search.square} />
      </View>
    </SafeAreaView>
  );
};
export default Search;
