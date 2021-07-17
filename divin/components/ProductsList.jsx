import React, { useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductDetails from './ProductsDetails';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';

const styles = StyleSheet.create({
  container1: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  title: {
    color: '#FE984E',
    fontSize: 20,
  },
  description: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  container2: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  item: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',

    backgroundColor: '#889988',
  },
  photoIcon: {
    flex: 1,
    alignItems: 'center',
    width: 100,
    height: 85,
    margin: 10,
  },
  productDetails: {
    flex: 2,
    justifyContent: 'space-between',
    fontSize: 10,
    margin: 10,
  },
  itemDetails: {
    margin: 4,
  },
  footer: {
    width: '100%',
    height: '7.5%',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 35,
    backgroundColor: '#448042',
  },
});

export default function ProductList() {

  // redirect to Login
  const goToLogin = () => {
    props.navigation.push('Login');
  };
  // redirect to DashboardPage
  const goToDashboard = () => {
    props.navigation.push('Dashboard');
  };

  // to get all info related to existing items in Stock table
  const [products, setProducts] = React.useEffect('');
  useEffect(() => {
    axios
      .get(`https://localhost:3000/farmer/${id}/products/${id}`)// via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setStock(data);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container1}>
        <ScrollView>
          <StatusBar />
          <View style={styles.header}>
            <Text style={styles.title}>Mes Produits</Text>
            <Text style={styles.description}>(Liste de mes produits)</Text>
          </View>
          <View style={styles.container2}>
            <Image style={styles.photoIcon} source={ImageBanniereProducteur} />
            <View style={styles.item}>
              {products.map((item) => (
                <View>
                  <View style={styles.photoIcon}>
                    <Image style={styles.photoIcon} source={ImageBanniereProducteur} />
                  </View>
                  <View style={styles.productDetails}>
                    <Text style={styles.itemDetails}>Nom: {item.name}</Text>
                    <Text style={styles.itemDetails}>Quantité: {item.}</Text>
                    <Text style={styles.itemDetails}>Date limite de vente: {item.availabilityDate}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer} />
      </View>
    </SafeAreaView>
  );
}
