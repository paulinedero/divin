import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import FarmersListScreen from './FarmersListScreen';
import MapScreen from './MapScreen';
import FavoritesScreen from './FavoritesScreen';

const StackNavigator = createStackNavigator();

export default function FarmersNav() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="List" component={FarmersListScreen} options={{ headerShown: false }} />
      <StackNavigator.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
      <StackNavigator.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  );
}
