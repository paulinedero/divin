import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import ValidationScreen from './components/ValidationScreen';
import Dashboard from './components/Dashboard/Dashboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Screen name="Validation" component={ValidationScreen} options={{ headerShown: false }} />
        <Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}
