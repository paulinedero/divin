import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './components/LoginScreen';
import ValidationScreen from './components/ValidationScreen';
import MainScreen from './components/MainScreen';

const StackNavigator = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
});

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <StackNavigator.Screen name="Validation" component={ValidationScreen} options={{ headerShown: false }} />
        <StackNavigator.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
