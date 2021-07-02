import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InscriptionsPage from './components/InscriptionsPage';
import StocksPage from './components/StockPage';

const { Navigator, Screen } = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="InscriptionPage" component={InscriptionsPage} options={{ headerShown: false }} />
        <Screen name="Dashboard" component={StocksPage} options={{ headerShown: false }} />
        <InscriptionsPage />
      </Navigator>
    </NavigationContainer>
  );
}
