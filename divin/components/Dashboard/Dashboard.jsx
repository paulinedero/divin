import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
import TopProductCard from './TopProductCard';
import FlopProductCard from './FlopProductCard';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 'auto',
    marginTop: 40,
    marginRight: 'auto',
    marginBottom: 20,
  },
  mainTitle: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#448042',
    margin: 10,
  },

  subTitle: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FE984E',
    margin: 10,
  },

  text: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 18,
    color: 'black',
  },

  dashboard: {
    marginTop: 30,
    marginBottom: 30,
  },
});

export default function Dashboard() {
  const [topProduct, setTopProduct] = useState([]);
  const [flopProduct, setFlopProduct] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.1.63:3000/farmers/5/most-ordered-items')
      .then((res) => res.data)
      .then((data) => setTopProduct(data));
  }, []);
  console.log(topProduct);
  useEffect(() => {
    axios
      .get('http://192.168.1.63:3000/farmers/5/less-ordered-items')
      .then((res) => res.data)
      .then((data) => setFlopProduct(data));
  }, []);

  return (
    <ScrollView>
      <View style={styles.body}>
        <Image style={styles.logo} source={require('../../assets/dashboard_logo_divin.png')} />
        <Text style={styles.mainTitle}>Bonjour Pauline !</Text>
        <Text style={styles.text}>Voici votre tableau de bord quotidien.</Text>
        <View style={styles.dashboard}>
          <View>
            <Text style={styles.subTitle}>Composition du stock actuel</Text>
          </View>
          <Text style={styles.subTitle}>Les plus commandés</Text>
          <View style={styles.topProductCard}>
            {topProduct.map((item, index) => (
              <TopProductCard
                key={index}
                name={item.name.toUpperCase()}
                quantity={item.quantity}
                purchaseUnit={item.unite}
              />
            ))}
          </View>
          <Text style={styles.subTitle}>Les moins commandés</Text>
          <View style={styles.flopProductCard}>
            {flopProduct.map((item, index) => (
              <FlopProductCard
                key={index}
                name={item.name.toUpperCase()}
                quantity={item.quantity}
                purchaseUnit={item.unite}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
