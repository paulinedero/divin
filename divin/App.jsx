import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Dashboard from './components/Dashboard/Dashboard';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './components/LoginScreen';
// import ValidationScreen from './components/ValidationScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Dashboard />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
  { /*
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Screen name="Validation" component={ValidationScreen} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
    */ }
}
