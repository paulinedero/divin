/* eslint-disable global-require */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import Cancel from './Cancel';

// Authentication context
import AuthContext from '../context/AuthContext';

// API
import api from '../utils/api';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  alertNoValide: {
    fontSize: 12,
    color: 'rgba(240, 92, 92, 0.8)',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
  },
  cancelView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#FFBD59',
  },
  cancel: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    color: '#000',
    zIndex: 4,
  },
  productPhoto: {
    alignItems: 'center',
    width: 35,
    height: 35,
    margin: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  stockCard: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 2,
    borderColor: '#FFBD59',
  },
  background: {
    backgroundColor: '#B6D1B5',
    width: '100%',
    height: '60%',
    borderRadius: 5,
    position: 'absolute',
    zIndex: -2,
    top: 10,
    left: 17,
  },
  insedeCard: {
    display: 'flex',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFBD59',
  },
  productCard: {

  },
  productDetails: {
    justifyContent: 'flex-start',
    fontSize: 10,
    margin: 3,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderColor: '#B6D1B5',
  },
  textTitle: {
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FFBD59',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFBD59',
    marginLeft: 5,
  },
  dispositionDetails: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    color: '#FFBD59',
  },
  textDetails: {
    marginLeft: 5,
    fontSize: 15,
    color: '#696969',
  },

});

export default function Products({ id, price, quantityStock, availabilityDate, createdDate }) {
  const { currentUser } = React.useContext(AuthContext);
  const [eraseStock, setEraseStock] = React.useState([]);

  async function deleteStock(id) {
    try {
      const response = await fetch(`${api.apiUrl}/farmers/${currentUser.id}/stocks/${id}`, // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost" (with http"S") is to be showned via the browser window
        {
          availability_date: availableDate,
          quantity,
          product_id: getProducts.product.id,
        });
      return await response.json();
    } catch (err) {
      console.error(err);
      // Handle errors here
    }
  }

  return (
    <View style={styles.container}>
      {(createdDate >= Date) // à mettrer correctement '<' !!!!!!!!!!!!!!!!!!
        ? (
          <Text style={styles.alertNoValide}>
            Aucun produit en stock est disponible à cette date
          </Text>
        )
        : (
          <View style={styles.card}>
            <View style={styles.cancelView}>
              <TouchableOpacity
                onPress={() => (deleteStock())}
                title="Annuler"
              >
                <Cancel style={styles.cancel} />

              </TouchableOpacity>
            </View>
            <View style={styles.stockCard}>
              <View style={styles.insideCard}>
                <View style={styles.background} />
                <Image style={styles.productPhoto} source={require('../assets/ImageBanniereProducteur.png')} />
              </View>
              <View>
                <View style={styles.productDetails}>
                  <Text style={styles.title}>
                    Nom
                  </Text>
                  <View style={styles.dispositionDetails}>
                    <Text style={styles.textDetails}>
                      Quantité disponible:
                      {' '}
                    </Text>
                    <Text style={styles.text}>
                      {quantityStock}
                      .
                    </Text>
                  </View>
                  <View style={styles.dispositionDetails}>
                    <Text style={styles.textDetails}>
                      Prix par unité:
                      {' '}
                    </Text>
                    <Text style={styles.text}>
                      {price}
                      €/par unité.
                    </Text>
                  </View>
                  <View style={styles.dispositionDetails}>
                    <Text style={styles.textDetails}>
                      Produit disponible jusqu&apos;au:
                    </Text>
                    <Text style={styles.text}>
                      {' '}
                      {moment(availabilityDate).format('DD/MM/YYYY')}
                      .
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
    </View>
  );
}
