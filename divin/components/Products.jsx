/* eslint-disable global-require */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '10%',
    borderRadius: 5,
    marginBottom: 100,
  },
  btnPress: {

  },
  productCard: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#B6D1B5',
  },
  photoIcon: {
    alignItems: 'center',
    width: 110,
    height: 110,
    minWidth: 75,
    minHeight: 75,
    margin: 10,
    borderRadius: 5,
  },
  textTitle: {
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FFBD59',
  },
  title: {
    fontSize: 18,
  },
  productDetails: {
    justifyContent: 'flex-start',
    fontSize: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderColor: '#B6D1B5',
  },
  textDetails: {
    fontSize: 16,
    color: '#696969',
  },
  splashTitle: {
    position: 'relative',
    zIndex: 2,
    top: 27,
    right: 25,
  },
  splashImage: {

  },
  splashDetails: {
    position: 'relative',
    zIndex: 2,
    top: 30,
    right: 25,
  },
});

// <Link to={`/articles/${id}`}> News in Details</Link>

// This file allows to get the existents products from the DataBase once inside and clicked
// navigate to : new product, each product details
export default function Products(props, {
  id,
  name,
  price,
  stock,
  date,
}) {
  const goToProductsDetails = () => {
    props.navigation.push('ProductsDetails');
  };

  return (
    <View style={styles.container}>
      <View style={styles.productCard}>
        <View>
          <View style={styles.splashTitle}>
            <View style={styles.textTitle}>
              <TouchableOpacity
                onPress={() => (goToProductsDetails({ id }))}
                title="Voir détails"
              >
                <Text style={styles.title}>
                  {name}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.splashImage}>
            <TouchableOpacity
              onPress={() => (goToProductsDetails(id))}
              title="Voir détails"
            >
              <Image
                style={styles.photoIcon}
                source={require('../assets/ImageBanniereProducteur.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.splashDetails}>
          <TouchableOpacity
            onPress={() => (goToProductsDetails(id))}
            title="Voir détails"
          >
            <View style={styles.productDetails}>
              <Text style={styles.textDetails}>
                Quantité produite:
                {' '}
                {stock}
              </Text>
              <Text style={styles.textDetails}>
                Prix par unité:
                {' '}
                {price}
                €
              </Text>
              <Text style={styles.textDetails}>
                Produit crée le:
              </Text>
              <Text style={styles.textDetails}>
                {date}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
