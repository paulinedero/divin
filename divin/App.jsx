import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './components/LoginScreen';
// import ValidationScreen from './components/ValidationScreen';
// import InscriptionsPage from './components/InscriptionsPage';
// import ProductsNew from './components/ProductsNew';
import ProductsList from './components/ProductsList';
// import ProductsDetails from './components/ProductsDetails';
// import StocksNew from './components/StocksNew';
// import StocksList from './components/StocksList';
// import StocksDetails from './components/StocksDetails';

const { Navigator, Screen } = createStackNavigator();

/*
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
/*

<Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
<Screen name="Validation" component={ValidationScreen} options={{ headerShown: false }} />
<Screen name="InscriptionsPage" component={InscriptionsPage} options={{ headerShown: false }} />
<Screen name="ProductsNew" component={ProductsNew} options={{ headerShown: false }} />
<Screen name="ProductsList" component={ProductsList} options={{ headerShown: false }} />
<Screen name="Products" component={Products} options={{ headerShown: false }} />
*/

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="ProductsList" component={ProductsList} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}
