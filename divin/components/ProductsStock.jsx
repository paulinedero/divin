import React, { useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';

const styles = StyleSheet.create({
  container1: {
    margin: 20,
    display: 'flex',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',

  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    margin: 20,
    marginTop: 35,
  },
  quitButton: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  ImageBanniereProducteur: {
    width: 75,
    height: 75,
    opacity: 0.8,
  },
  container2: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 14,
    color: '#FFBD59',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    justifyContent: 'center',
    margin: 5,
  },
  itemDetails: {

  },
  photoIcon: {
    margin: 5,
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  footer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 35,
    backgroundColor: '#448042',
  },
});

export default function ProductsStock() {
  // redirect to Login
  const goToLogin = () => {
    props.navigation.push('Login');
  };
  // redirect to DashboardPage
  const goToDashboard = () => {
    props.navigation.push('Dashboard');
  };

  /*
  // to get all info related to existing items in Stock table
  const [stock, setStock] = React.useEffect('');

  useEffect(() => {
    axios
      .get('http://192.168.1.54:3000/stock/:id/') // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost" (with http"S") is to be showned via the browser window
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setStock(data);
      });
  }, []);
*/

  return (
    <View>
      <StatusBar />
      <SafeAreaView>
        <View style={styles.container1}>

          <View style={styles.header}>
            <View>
              <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.quitButton}>Déconnecter </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={goToDashboard}>
                <Image style={styles.ImageBanniereProducteur} source={ImageBanniereProducteur} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title}>Mon Stock</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.photoIcon}>
              <Image style={styles.photoIcon} source={ImageBanniereProducteur} />
            </View>
            <View style={styles.text} />
            <Text style={styles.itemDetails}>Nom:</Text>
            <Text style={styles.itemDetails}>Quantité:</Text>
          </View>

          <View style={styles.footer} />
        </View>
      </SafeAreaView>
    </View>
  );
}
