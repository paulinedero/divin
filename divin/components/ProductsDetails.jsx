import React from 'react';
import axios from 'axios';
import {
  Button,
  Image,
  StyleSheet,
  Text,
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

export default function ProductsDetails(props) {
  const id = props.match.params.id;
  console.log(props);

  const [productDetail, setProductDetail] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://localhost:3000/farmer/${id}/products/${id}`) // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setProductDetail(data);
      });
  }, []);

  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        Produit:
        {productDetail.name}
      </Text>
      {productDetail.map((item) => (
        <View>
          <View style={styles.photoIcon}>
            <Image style={styles.photoIcon} source={ImageBanniereProducteur} />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.itemDetails}>
              Nom:
              {item.name}
            </Text>
            <Text style={styles.itemDetails}>
              Quantité mise en Stock:
              {item.production_price}
            </Text>
            <Text style={styles.itemDetails}>
              Date de creation:
              {item.creation_date}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
