import React from 'react';
import { StyleSheet, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import LoginScreen from './components/LoginScreen';
//import ValidationScreen from './components/ValidationScreen';
//import InscriptionsPage from './components/InscriptionsPage';
import ProductsStock from './components/ProductsStock';

//const { Navigator, Screen } = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
});

/*
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Screen name="Validation" component={ValidationScreen} options={{ headerShown: false }} />
        <Screen name="InscriptionsPage" component={InscriptionsPage} options={{ headerShown: false }} />
        <Screen name="ProductsStock" component={ProductsStock} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
*/

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsStock />
    </View>
  );
}
