import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import ProductDetails from 'ProductDetails';
// <Link to={`/articles/${id}`}> News in Details</Link>

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
});


export default function Article({ id, availability_date, product_id, quantity }) {
  return (
    <SafeAreaView>
      <View style={styles.description}>
        <Text style={styles.text}>
          ID: {product_id}
          IdStock: {id}
        </Text>
        <Text style={styles.text}>
          Date de perempetion:
          {
            availability_date
          }
        </Text>
        <Text style={styles.text}>
          Quantité disponible: {quantity}
        </Text>
      </View >
    </SafeAreaView>
  )
};