import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Picker,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';

const styles = StyleSheet.create({
  container2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B6D1B5',
  },
  title: {
    color: '#FE984E',
    fontSize: 15,
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    marginLeft: 60,
  },
  photoIcon: {
    alignItems: 'center',
    width: 85,
    height: 85,
    borderRadius: 20,
    margin: 10,
  },
  item: {
    alignItems: 'flex-start',
    width: 220,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B6D1B5',
    backgroundColor: '#F5F5F5',
  },
  viewPicker: {
    marginTop: 17,
    marginBottom: 35,
    width: '80%',
    margin: 20,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#FFBD59',
    height: 50,
    borderColor: 'gray',
  },
  alertValide: {
    fontSize: 12,
    color: 'rgba(76, 153, 0, 0.8)',
  },
  alertNoValide: {
    fontSize: 12,
    color: 'rgba(240, 92, 92, 0.8)',
  },
  splashBackground: {
    backgroundColor: '#B6D1B5',
    borderRadius: 10,
    position: 'absolute',
    width: 200,
    height: 100,
    top: 20,
    zIndex: -2,
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
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 40,
  },
  header2: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: '90%',
    height: '45%',
  },
  input: {
    fontSize: 15,
    height: 40,
    width: '85%',
    backgroundColor: '#FFFFFF',
    marginTop: 17,
    marginLeft: '7.5%',
  },
  button: {
    flexDirection: 'row-reverse',
    marginLeft: 35,
  },
  buttonValide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: 100,
    height: 50,
    opacity: 0.9,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
      borderRadius: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.5,
    elevation: 6,
  },
});

export default function ProductsStock(props) {
  const [quantity, onChangeQuantity] = React.useState(''); // to guarantee the of insert phone number
  const [availableDate, onChangeAvailableDate] = React.useState(''); // to guarantee the insertion of a correct peremption date

  // allows to get a selection of availablea products in database}
  const [getProducts, setGetProducts] = useState([]);
  // allows to specify from the selection of available products witch
  // product the farmer will choose to make it available to stock
  const [selectProducts, setSelectProducts] = useState(null);

  const invalideForm = () => availableDate === '' || quantity === '' || selectProducts === '';
  // to guarantee the control from all fields

  const goToStocksList = () => {
    props.navigation.push('StocksList');
  };

  useEffect(() => {
    axios
      .get('http://192.168.1.54:3000/farmers/12/products/')
      // .get('http://192.168.1.54:3000/farmers/${id}/products/')
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setGetProducts(data);
      });
  }, []);

  const newStock = async () => {
    try {
      const result = await axios.post(
        'http://192.168.1.54:3000/farmers/12/stocks/', // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost" (with http"S") is to be showned via the browser window
        {
          availability_date: availableDate,
          quantity,
          product_id: getProducts.product.id,
        },
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container2}>
      <Text style={styles.title}>
        Pour rendre disponible vos produits
      </Text>
      <View>
        <View>
          <View style={styles.cardProduct}>
            <Image style={styles.photoIcon} source={ImageBanniereProducteur} />

            {/*  HOW TO MAKE IT APPEAR EVERY IMAGE TO Each product.ID?!?...
                  this will be a good place */}

            <View style={styles.item}>
              <View style={styles.viewPicker}>
                <Picker
                  selectedValue={selectProducts}
                  onValueChange={(itemValue) => setSelectProducts(itemValue)}
                >
                  {getProducts.map((product, index) => (
                    <Picker.Item
                      key={{ index }}
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

          <View style={styles.header2}>
            <View>
              <TextInput
                mode="outlined"
                label="Quantité en stock"
                value={quantity}
                name="stock"
                style={styles.input}
                onChangeText={onChangeQuantity}
                placeholder="Entrez la quantité d'articles mise en stock"
                minLength={1}
              />
              <View style={styles.text}>
                {((quantity.length === 0) && (quantity.match(/^[0-9]+$/) !== null))
                  ? (
                    <Text style={styles.alertNoValide}>
                      La quantité dois être superior à 0
                    </Text>
                  ) : null}
              </View>
              <View style={styles.text}>
                {(quantity.match(/^[A-Za-z]+$/))
                  ? (
                    <Text style={styles.alertNoValide}>
                      UNIQUEMENT des chiffres
                    </Text>
                  ) : null}
              </View>
            </View>
            <View>
              <TextInput
                mode="outlined"
                label="Date limite de vente"
                value={availableDate}
                name="date"
                style={styles.input}
                onChangeText={onChangeAvailableDate}
                placeholder="Entrez la date limite de vente AAAA-MM-JJ"
                length={8}
              />
              <View style={styles.text}>
                {availableDate.length <= 9 || availableDate.match(/^[A-Za-z]+$/)
                  ? (
                    <Text style={styles.alertNoValide}>
                      Le format de la date limite doit être respecté
                    </Text>
                  ) : null}
              </View>
            </View>
            <View style={styles.button}>
              <View style={styles.buttonValide}>
                <Button
                  onPress={() => (newStock()) && (goToStocksList())}
                  title="Ajouter"
                  disabled={invalideForm()}
                  color={invalideForm() ? '#616161' : '#FFBD59'}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
