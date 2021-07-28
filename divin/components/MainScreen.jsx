import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// eslint-disable-next-line import/no-duplicates
import { FontAwesome5 } from '@expo/vector-icons';
// eslint-disable-next-line import/no-duplicates
import { AntDesign } from '@expo/vector-icons';

import FarmersNav from './FarmersNav';
import TestNavigation from './TestNavigation';

const Tab = createBottomTabNavigator();

function MainScreen(props) {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="List"
        component={FarmersNav}
        options={{
          tabBarLabel: '',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="shopping-basket" size={24} style={{ tintColor: focused ? '#448042' : '#AAA' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
