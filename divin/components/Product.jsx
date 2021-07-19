import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';

const styles = StyleSheet.create({
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
});

// <Link to={`/articles/${id}`}> News in Details</Link>

export default function Product({ key, id, name, price, stock, date }) {
  const goToProductDetails = () => {
    props.navigation.push('ProductDetails');
  };

  return (
    <View>
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => (goToProductDetails())}
          title="Voir détails"
          style={styles.btnPress}
        >
          <Text style={styles.details}>
            {name}
          </Text>
          <View>
            <View style={styles.photoIcon}>
              <Image style={styles.photoIcon}
                source={ImageBanniereProducteur} />
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.itemDetails}>
                Quantité mise en Stock:
                {stock}
              </Text>
              <Text style={styles.itemDetails}>
                Prix par unité:
                {price}
              </Text>
              <Text style={styles.itemDetails}>
                Produit cée le:
                {date}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
