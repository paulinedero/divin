import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import Products from './Products';

const styles = StyleSheet.create({
  container1: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  header2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFBD59',
    marginBottom: '4%',
    borderColor: '#FFBD59',
    borderWidth: 1,
  },
  tab1: {
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    height: '95%',
    width: '30%',
  },
  tab2: {
    backgroundColor: '#FFBD59',
  },
  titleTabSelect: {
    marginTop: 20,
    fontSize: 20,
    color: '#FFBD59',
  },
  titleTabNoSelect: {
    marginTop: 20,
    fontSize: 20,
    color: '#F5F5F5',
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    width: '100%',
    margin: 5,
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
  footer: {
    width: '100%',
    height: '7.5%',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#448042',
  },
});

export default function ProductList() {
  // to get all info related to existing items in Stock table
  const [products, setProducts] = useState([]);

  // TO NAVIGATE INTO OTHERS PAGES
  // to change into ProductsList page
  const goToProductsList = () => {
    props.navigation.push('ProductsList');
  };
  // to change into StockssList page
  const goToStocksList = () => {
    props.navigation.push('StocksList');
  };

  useEffect(() => {
    axios
      .get('http://192.168.1.54:3000/farmers/12/products/')// via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      // http://localhost:3000/farmers/${farmer.id}/products/')
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
      });
    console.log(products);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container1}>
          <StatusBar />
          <View style={styles.header2}>
            <View style={styles.tab1}>
              <TouchableOpacity
                onPress={() => (goToProductsList)}
                title="ProductsNew"
              >
                <Text style={styles.titleTabSelect}>Mes Produits</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tab2}>
              <TouchableOpacity
                onPress={() => (goToStocksList)}
                title="StockList"
              >
                <Text style={styles.titleTabNoSelect}>Mon Stock</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>

            <View style={styles.item}>
              {
                products.map((item, index) => (
                  <Products
                    key={index}
                    id={item.id}
                    name={item.name.toUpperCase()}
                    price={item.production_price}
                    stock={item.stock_min}
                    category={item.category}
                    {/*POURQUOI dateCreated N A APPARAIT PAS?!?!*/ }
                    dateCreated={moment(item.creationDate).format('DD/MM/YYYY')}
                  />
                ))
              }
            </View>
          </View>
        </View>
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
}
