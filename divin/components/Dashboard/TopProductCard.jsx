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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#448042',
    shadowRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 5,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
  },
});

export default function TopProductCard({ name, quantity, purchaseUnit }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={require('../../assets/check_icon.png')} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.text}>{quantity} {purchaseUnit}</Text>
      </View>
    </View>
  );
}
