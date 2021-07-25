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
// moment('dd/mm/yyyy').isSame(Date.now(), 'day');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
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
  cancel: {
    height: 15,
    width: 15,
    borderBottomLeftRadius: 10, // bottom
    borderTopLeftRadius: 10, // bottom
    backgroundColor: '#FFBD59',
  },
  stockCard: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
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
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#B6D1B5',
  },
  productPhoto: {
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 10,
    marginTop: 20,
    borderRadius: 10,
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

});

export default function Products({ id, price, quantityStock, availabilityDate, createdDate }) {
  const deleteStock = () => {
    /* try {
       const result = await axios.put(
         'http://192.168.1.55:3000/farmers/12/stocks/:stockId', // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost" (with http"S") is to be showned via the browser window
         {
           availability_date: availableDate,
           quantity,
           product_id: getProducts.product.id,
         },
       );
       console.log(result);
     } catch (err) {
       console.error(err);
     } catch (err)
     */
  };

  // moment('dd/mm/yyyy').isSame(Date.now(), 'day')
  return (
    <View style={styles.container}>
      {(createdDate >= Date) // à mettrer correctement '<'
        ? (
          <Text style={styles.alertNoValide}>
            Aucun produit en stock est disponible à cette date
          </Text>
        )
        : (
          <View style={styles.card}>
            <View>
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
                <Text style={styles.title}>
                  {/*
                name, photo, price
                */}
                </Text>
              </View>
              <View>
                <View style={styles.productDetails}>
                  <Text style={styles.textDetails}>
                    Quantité disponible:
                    {quantityStock}
                  </Text>
                  <Text style={styles.textDetails}>
                    Prix par unité:
                    {price}
                    €/par unité.
                  </Text>
                  <Text style={styles.textDetails}>
                    Produit disponible jusqu'au:
                    {moment(availabilityDate).format('DD/MM/YYYY')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
    </View>
  );
}
