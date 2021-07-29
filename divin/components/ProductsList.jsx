/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
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
import Products from './Products';
import ProductsNew from './ProductsNew';
import Menu from './Menu';

// Authentication context
import AuthContext from '../context/AuthContext';

// API
import api from '../utils/api';

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
  bodyBotton: {
    display: 'flex',
    // justifyContent: 'flex-start',
  },
  spaceBetweenBtn: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleButton: {
    fontSize: 15,
    color: 'white',
    marginLeft: 40,
  },
  btnPress: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: '90%',
    height: 50,
    opacity: 0.9,
    borderRadius: 30,
    backgroundColor: '#FE984E',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.5,
    elevation: 6,
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
  backgroundEmpty: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    borderColor: '#889988',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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

// This file allows to see the products, and once inside, navigate to :
// add a new product, into each product and all list of products
export default function ProductList(props) {
  const { currentUser } = React.useContext(AuthContext);
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
  // to change into Dasboard page
  const goToProductsNew = () => {
    props.navigation.push('ProductsNew');
  };

  useEffect(() => {
    api.axios
      .get(`${api.apiUrl}/farmers/${currentUser.id}/products/`)
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container1}>
          <StatusBar />
          <View style={styles.header2}>
            <View style={styles.tab1}>
              <TouchableOpacity
                onPress={() => (goToProductsList())}
                title="ProductsList"
              >
                <Text style={styles.titleTabSelect}>Mes Produits</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tab2}>
              <TouchableOpacity
                onPress={() => (goToStocksList())}
                title="StockList"
              >
                <Text style={styles.titleTabNoSelect}>Mon Stock</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.bodyBotton}>
              <View style={styles.spaceBetweenBtn}>
                <View>
                  <TouchableOpacity
                    onPress={() => (goToProductsNew())}
                    title="ProductsNew"
                    style={styles.btnPress}
                  >
                    <Text style={styles.titleButton}>
                      Nouveau Produit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.item}>
              {
                products.map((item, index) => (
                  item.lenght === 0
                    ? (
                      <View style={styles.backgroundEmpty}>
                        <Text>
                          Produits inexistent
                          Ajouter d`abord des nouveaux produits
                        </Text>
                      </View>
                    )
                    : (
                      <Products
                        key={index}
                        id={item.id}
                        name={item.name.toUpperCase()}
                        price={item.production_price}
                        stock={item.stock_min}
                        category={item.category}
                        dateCreated={item.creation_date}
                      />
                    )
                ))
              }
            </View>
          </View>
          <Menu />
          <View style={styles.footer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
