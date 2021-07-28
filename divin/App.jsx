import 'react-native-gesture-handler';
/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable default-case */
import React from 'react';
import { Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import { decode as atob } from 'base-64';

// components
import LoginScreen from './components/LoginScreen';
import ValidationScreen from './components/ValidationScreen';
import InscriptionsPage from './components/InscriptionsPage';
import ProductsNew from './components/ProductsNew';
import ProductsList from './components/ProductsList';
import ProductsDetails from './components/ProductsDetails';
import StocksList from './components/StocksList';
import Dashboard from './components/Dashboard/Dashboard';
import InscriptionsPage from './components/InscriptionsPage';
import MainScreen from './components/MainScreen';

// Authentication context
import AuthContext from './context/AuthContext';

// API
import api from './utils/api';

const StackNavigator = createStackNavigator();

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

export default function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('token');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        try {
          const result = await
            api.axios.post(`${api.apiUrl}/authentication/login`, {
              email: data.email,
              password: data.password,
            });
          await SecureStore.setItemAsync('token', result.data.token);
          const base64Url = result.data.token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const session = JSON.parse(atob(base64));
          setCurrentUser(session.user);
          dispatch({ type: 'SIGN_IN', token: result.data.token });
        } catch (err) {
          console.error(err);
        }
      },
      signOut: async () => {
        try {
          await SecureStore.deleteItemAsync('token');
          setCurrentUser(null);
          dispatch({ type: 'SIGN_OUT' });
        } catch (err) {
          console.error(err);
        }
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider
      value={{ signIn: authContext.signIn, signOut: authContext.signOut, currentUser }}
    >
      <NavigationContainer style={styles.container}>
        <Navigator screenOptions={{ headerShown: false }}>
          {state.isLoading
            ? <Screen name="Loading" component={ActivityIndicator} />
            : state.userToken !== null
              ? (
                <>
                  <Screen name="Dashboard" component={Dashboard} />
                  <Screen name="ProductsDetails" component={ProductsDetails} />
                  <Screen name="ProductsList" component={ProductsList} />
                  <Screen name="StocksList" component={StocksList} />
                  <Screen name="ProductsNew" component={ProductsNew} />
                  <Screen name="Login" component={LoginScreen} />
                  <Screen name="Main" component={MainScreen} />
                </>
              )
              : (
                <>
                  <Screen name="Login" component={LoginScreen} />
                  <Screen name="Validation" component={ValidationScreen} />
                  <Screen name="InscriptionsPage" component={InscriptionsPage} />
                </>
              )}
        </Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
