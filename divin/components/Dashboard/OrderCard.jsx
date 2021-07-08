import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2cb20c',
    shadowRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: '#696969',
    textAlign: 'center',
    padding: 2,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#696969',
    textAlign: 'center',
    padding: 2,
  },
});

export default function TopProductCard({ id, purchaseDate, total }) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../../assets/order_icon.png')} />
      <Text style={styles.text}>
        Réf. de la commande :
        {' '}
        {id}
      </Text>
      <Text style={styles.text}>
        Date d'achat :
        {' '}
        {purchaseDate}
      </Text>
      <Text style={styles.totalPrice}>
        Total :
        {' '}
        {total}
        {' '}
        €
      </Text>
    </View>
  );
}
