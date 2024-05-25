/* eslint-disable prettier/prettier */
import {View,Text, Image} from 'react-native';
import React from 'react';
import row from './row';
const AmbulanceTypeRow = (props) => {
  const {type, isSelected} = props;
  const getAmbulanceImage = () => {
    if (type.type === 'Basic'){
     return require('../../assets/images/Basic.png');
    }
    if (type.type === 'Advance'){
     return require('../../assets/images/Advance.png');
    }
     return require('../../assets/images/Mortury.png');
  };
  return (
    <View style={[row.container, isSelected ? row.selected : null]}>
      <Image style={row.image} source={getAmbulanceImage()} />
      <View style={row.middleContainer}>
        <Text style={row.type}>{type.type}</Text>
        <Text style={row.info}>{type.info}</Text>
      </View>
      <View style={row.rightContainer}>
        <Image style={row.tag} source={require('../../assets/images/tag.png')} />
        <Text style={row.price}>{type.price}</Text>
      </View>
    </View>
  );
};

export default AmbulanceTypeRow;
