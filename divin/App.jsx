import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import ValidationScreen from './components/ValidationScreen';
import InscriptionsPage from './components/InscriptionsPage';

const { Navigator, Screen } = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
});

export default function App() {
  /* The order of navigation metters to all connexions */
  return (
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Screen name="Validation" component={ValidationScreen} options={{ headerShown: false }} />
        <Screen name="InscriptionsPage" component={InscriptionsPage} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer >
  );
}
