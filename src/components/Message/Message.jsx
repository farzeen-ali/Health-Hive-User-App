/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import message from './messageStyle';

const Message = () => {
  return (
    <View style={message.container}>
      <Text style={message.title}>Important Message!</Text>
      <Text style={message.text}>Important Message!Important Message!Important Message!Important Message!Important Message!Important Message!Important Message!Important Message!Important Message!Important Message!Important Message!Important Message!Important Message!</Text>
      <Text style={message.learnMore}>Learn More</Text>
    </View>
  );
};

export default Message;
