import React, { useEffect } from 'react';
import axios from 'axios';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Stock from './Stock';
import StocksNew from './StocksNew';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
// import StocksNew from './StocksNew';

const styles = StyleSheet.create({
  container1: {

  },
  header: {
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
  inStock: {
    marginTop: 10,
  },
  footer: {
    width: '100%',
    height: '7.5%',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#448042',
    marginTop: 20,
  },
});

// This file allows to see the Real Stock, and once inside, navigate to :
// products. Into Stock menu can be found:
// all list of available products to "validate into available stock", and see "the last ones"
export default function StocksList(props) {
  // TO NAVIGATE INTO OTHERS PAGES
  // to change into ProductsList page
  const goToProductsList = () => {
    props.navigation.push('ProductsList');
  };
  // to change into StockssList page
  const goToStocksList = () => {
    props.navigation.push('StocksList');
  };

  // to get all info related to existing items in Stock table
  const [getStocks, setGetStocks] = React.useState([]); // to get all available information in stock

  useEffect(() => {
    axios
      .get('http://192.168.1.54:3000/farmers/12/stocks/')// via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      // .get(`https://192.168.1.55:3000/farmer/${id}/stock`)// via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      .then((res) => res.data)
      .then((data) => {
        setGetStocks(data);
      });
  }, []);

  {/* <KeyboardAvoidingWrapper>
    <SafeAreaView>
    <ScrollView>
*/ }
  return (
    <View style={styles.container1}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.tab2}>
          <TouchableOpacity
            onPress={() => (goToProductsList)}
            title="ProductsNew"
          >
            <Text style={styles.titleTabNoSelect}>Mes Produits</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab1}>
          <TouchableOpacity
            onPress={() => (goToStocksList)}
            title="StockList"
          >
            <Text style={styles.titleTabSelect}>Mon Stock</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StocksNew />

      {/* How to pass product.name? */}
      <View style={styles.inStock}>
        {
          getStocks.map((stock, index) => (
            <Stock
              key={{ index }}
              id={stock.id}
              price={stock.production_price}
              quantityStock={stock.quantity}
              availabilityDate={stock.availability_date}
              createdDate={stock.creation_date}
            />
          ))
        }
      </View>
      <View style={styles.footer} />
    </View>
  );
}
