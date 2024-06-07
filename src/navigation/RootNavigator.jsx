/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import HomeNavigator from './HomeNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const RootNavigator = ({ route }) => {
  const { phoneNumber } = route.params || {};
  return (
      <Drawer.Navigator drawerContent={(props) => (
        <CustomDrawer {...props} phoneNumber={phoneNumber} />
        )}>
        <Drawer.Screen name="Health Hive">
        {(props) => <HomeNavigator {...props} phoneNumber={phoneNumber} />}
      </Drawer.Screen>
      </Drawer.Navigator>
  );
};

export default RootNavigator;

