import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Dimensions,
  Image,
  Picker,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import Stock from './Stock';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';

const styles = StyleSheet.create({
  container1: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
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
  header2: {

  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 2,
  },
  title: {
    color: '#FE984E',
    fontSize: 15,
  },
  splashBackground: {
    backgroundColor: '#889988',
    borderRadius: 10,
    position: 'absolute',
    width: 200,
    height: 100,
    top: 20,
    zIndex: -2,
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
  photoIcon: {
    alignItems: 'center',
    width: 85,
    height: 85,
    borderRadius: 20,
    margin: 5,
  },
  item: {
    alignItems: 'flex-start',
    width: 220,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#889988',
    backgroundColor: '#F5F5F5',
  },
  viewPicker: {
    marginTop: 17,
    marginBottom: 25,
    width: '80%',
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#FFBD59',
    height: 50,
    borderColor: 'gray',
  },
  alertNoValide: {
    fontSize: 12,
    color: 'rgba(240, 92, 92, 0.8)',
  },
  alertValide: {
    fontSize: 12,
    color: 'rgba(76, 153, 0, 0.8)',
  },
  tableDetailsProduct: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 60,
    borderWidth: 1,
    borderColor: '#889988',
    borderRadius: 5,
    width: 200,
  },
  contextDetailsProducts: {
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 20,
  },
  textDetails: {
    color: '#FFBD59',
    fontSize: 14,
    marginLeft: 40,
  },
  input: {
    fontSize: 15,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 17,
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

export default function ProductsStock() {
  // to get all info related to existing items in Stock table
  const [getStocks, setGetStocks] = React.useState(''); // to get all available information in stock
  const [quantity, onChangeQuantity] = React.useState(''); // to guarantee the of insert phone number
  const [availableDate, onChangeAvailableDate] = React.useState(''); // to guarantee the insertion of a correct peremption date

  // allows to get a selection of availablea products in database}
  const [getProducts, setGetProducts] = useState([]);
  // allows to specify from the selection of available products witch
  // product the farmer will choose to make it available to stock
  const [selectProducts, setSelectProducts] = useState(null);

  // const [newStock, setNewStock] = React.useState(''); // to add a available product into stock availability_date

  // TO NAVIGATE INTO OTHERS PAGES
  // to change into ProductsList page
  const goToProductsList = () => {
    // props.navigation.push('ProductsList');
  };
  // to change into StockssList page
  const goToStocksList = () => {
    // props.navigation.push('StocksList');
  };

  const invalideForm = () => availableDate === '' || quantity === '' || selectProducts === '';
  // to guarantee the control from all fields

  useEffect(() => {
    axios
      .get('http://192.168.1.55:3000/farmers/12/products/')
      // .get('http://192.168.1.54:3000/farmers/${id}/products/')
      .then((res) => res.data)
      .then((data) => {
        setGetProducts(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://192.168.1.55:3000/farmers/12/stocks/')// via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      // .get(`https://192.168.1.55:3000/farmer/${id}/stock/${id}`)// via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      .then((res) => res.data)
      .then((data) => {
        console.log(data[0]);
        setGetStocks(data[0]);
      });
  }, []);

  const newStock = async () => {
    // to adapte all variables between front-end and server
    // exemple: {first_name: firstName}  or {firstName: first_name} helps to 
    // convert the variables names into their corresponding values in the server.
    try {
      const result = await axios.update(
        'https://localhost:3000/farmers/:farmerId/stocks/', // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost" (with http"S") is to be showned via the browser window
        {
          availability_date: availableDate
          quantity,
          product_id: (getProducts.map((product) => product.id)),
        },
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
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
          <View style={styles.container2}>
            <Text style={styles.title}>
              Pour rendre disponible vos produits
            </Text>
            <View style={{ alignItens: 'center' }}>
              <View style={styles.cardProduct}>
                <Image style={styles.photoIcon} source={ImageBanniereProducteur} />
                {/*  HOW TO MAKE IT APPEAR EVERY IMAGE TO Each ID?!?

                {(quantity <= getProducts.map((product) => (product.photo))
                  ? <Image style={styles.photoIcon}
                    source={product.photo} />
                  : null
                )}
                */}
                <View style={styles.item}>
                  <View style={styles.viewPicker}>
                    <Picker
                      selectedValue={selectProducts}
                      onValueChange={(itemValue) => setSelectProducts(itemValue)}
                    >
                      {getProducts.map((product, index) => (
                        <Picker.Item
                          key={index}
                          placeholder="Choisir votre produit"
                          label={product.name.toUpperCase()}
                          value={product.id}
                        />
                      ))}
                    </Picker>
                    {((getProducts.length >= 1)
                      ? (
                        <Text style={styles.alertValide}>
                          Selectionnez un produit
                        </Text>
                      ) : (
                        <Text style={styles.alertNoValide}>
                          Vous n'aviez pas des produits disponibles
                        </Text>
                      ))}
                  </View>
                </View>
                <View style={styles.splashBackground} />
              </View>
              <View style={styles.tableDetailsProduct}>
                <View>
                  <Text style={styles.contextDetailsProducts}>
                    Disponible dans la reserve:
                  </Text>
                  {getProducts.map((product, index) => (
                    <Text
                      key={index}
                      value={product.id}
                      style={styles.textDetails}
                    >
                      {product.stock_min}
                      {' '}
                      {product.production_unit}
                      {' '}
                      à
                      {' '}
                      {product.production_price}
                      {' '}
                      €/
                      {product.production_unit}
                      {'\n'}
                    </Text>
                  ))}
                </View>
                <View>
                  <Text style={styles.contextDetailsProducts}>
                    Deniére actualisation le
                  </Text>
                  {getProducts.map((product, index) => (
                    <Text
                      key={index}
                      value={product.id}
                      style={styles.textDetails}
                    >
                      {((product.stock_min >= 1)
                        ? (
                          <Text style={styles.contextDetailsProducts}>

                            {moment(product.creation_date).format('DD/MM/YYYY')}
                          </Text>
                        ) : null)}
                      {'\n'}
                    </Text>
                  ))}
                </View>
              </View>
              <View>
                <TextInput
                  mode="outlined"
                  label="Quantité en stock"
                  value={quantity}
                  style={styles.input}
                  onChangeText={onChangeQuantity}
                  placeholder="Entrez la quantité d'articles mise en stock"
                  minLength={1}
                />
                <View>
                  {((quantity.length === 0) && (quantity.match(/^[0-9]+$/) !== null))
                    ? (
                      <Text style={styles.alertNoValide}>
                        La quantité dois être superior à 0
                      </Text>
                    ) : null}
                </View>
                <View>
                  {(quantity.match(/^[A-Za-z]+$/))
                    ? (
                      <Text style={styles.alertNoValide}>
                        UNIQUEMENT des chiffres
                      </Text>
                    ) : null}
                </View>
              </View>
              <View style={styles.alertNoValide}>
                {(quantity <= getProducts.map((product) => (product.stock_min))
                  ? null
                  : (
                    <Text style={styles.alertNoValide}>
                      La quantité mise en stock dois être égale ou inferior à reélment existente
                    </Text>
                  )
                )}
              </View>
              <View>
                <TextInput
                  mode="outlined"
                  label="Date limite de vente"
                  type="date"
                  style={styles.input}
                  placeholder="Entrez la date limite de vente AAAA-MM-JJ"
                  length={8}
                  onChangeText={onChangeAvailableDate}
                  value={availableDate}
                />
                <View>
                  {availableDate.length <= 9 || availableDate.match(/^[A-Za-z]+$/)
                    ? (
                      <Text style={styles.alertNoValide}>
                        Le format de la date limite doit être respecté
                      </Text>
                    ) : null}
                </View>
              </View>
              <View>
                <View>
                  <Button
                    onPress={() => (handelNewStock) && goToStocksList()}
                    title="Ajouter"
                    disabled={invalideForm()}
                    color={invalideForm() ? '#616161' : '#FFBD59'}
                  />
                </View>
              </View>
              <View>
                {/*getStocks.map((item, index) => (
                  <Stock
                    key={index}
                    id={item.id}
                    price={item.production_price}
                    quantityStock={item.quantity}
                    availabilityDate={item.availability_date}
                    createdDate={item.creation_date}
                  />
                ))*/}
              </View>
            </View>
          </View>
          <View style={styles.footer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
