/* eslint-disable no-undef */
import React from 'react';
import {
  Dimensions,
  Image,
  Picker,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import IconPhoto from './IconPhoto';
import Menu from './Menu';

// Authentication context
import AuthContext from '../context/AuthContext';

// API
import api from '../utils/api';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#F5F5F5',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    textAlignVertical: 'center',
    paddingTop: 10,
    backgroundColor: '#FFBD59',
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    color: '#F5F5F5',
  },
  header2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFBD59',
    marginBottom: '1   %',
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
  titleDoc: {
    marginTop: 25,
    fontSize: 15,
    color: '#FFBD59',
  },
  body: {
    display: 'flex',
    marginRight: '4%',
    marginLeft: '4%',
    color: '#F5F5F5',
  },
  text: {
    marginTop: 30,
    color: '#FFBD59',
    fontSize: 18,
  },
  input: {
    fontSize: 15,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  inputHalf: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  inputViewHalfIn2: {
    fontSize: 15,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    width: '45%',
  },
  inputViewHalfIn3: {
    fontSize: 15,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    width: '37%',
  },
  inputViewHalfLitle1: {
    fontSize: 15,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    width: '35%',
  },
  inputViewHalfLitle2: {
    fontSize: 15,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    width: '45%',
  },
  inputViewHalfLitle3: {
    fontSize: 15,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    width: '15%',
  },
  pickers1: {
    marginTop: 17,
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    width: '36%',
  },
  allPickers: {
    marginTop: 17,
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    width: '23%',
  },
  photo: {
    marginRight: 75,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginTop: '10%',
  },
  titleButton: {
    fontSize: 15,
    color: 'white',
    marginLeft: 40,
  },
  spaceBetweenBtn: {
    display: 'flex',
    flexDirection: 'row',
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
  space: {
    backgroundColor: '#FFFFFF',
    height: '10%',
    width: '15%',
  },
  footer: {
    width: '100%',
    height: '7.5%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 35,
    backgroundColor: '#448042',
  },
  alertPass: {
    fontSize: 12,
    color: 'red',
  },
});

// selling product info
const initialFormNewProduct = {
  name: '',
  origin: '',
  description: '',
  production_unit: '',
  production_price: '',
  season_id: '',
  photo: '',
  category: '',
  stock_min: '',
  stock_max: '',
  max_storage_date: '',
  tag: '',
  farming_type: '',
  transformation: '',
  nutritional_statement: '',
  EAN_code: '',
  VAT: '',
  farmer_id: '',
};

// to accept all new modifications
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_PHOTO':
      return { ...state, photo: action.payload };
    case 'UPDATE_ORIGIN':
      return { ...state, origin: action.payload };
    case 'UPDATE_CATEGORY':
      return { ...state, category: action.payload };
    case 'UPDATE_STOCK_MIN':
      return { ...state, stock_min: action.payload };
    case 'UPDATE_STOCK_MAX':
      return { ...state, stock_max: action.payload };
    case 'UPDATE_PRODUCTION_UNIT':
      return { ...state, production_unit: action.payload };
    case 'UPDATE_SEASON_ID':
      return { ...state, season_id: action.payload };
    case 'UPDATE_NUTRITIONAL_STATEMENT':
      return { ...state, nutritional_statement: action.payload };
    case 'UPDATE_MAX_STORAGE_DATE':
      return { ...state, max_storage_date: action.payload };
    case 'UPDATE_FARMING_TYPE':
      return { ...state, farming_type: action.payload };
    case 'UPDATE_PRODUCTION_PRICE':
      return { ...state, production_price: action.payload };
    case 'UPDATE_TRANSFORMATION':
      return { ...state, transformation: action.payload };
    case 'UPDATE_EAN_CODE':
      return { ...state, EAN_code: action.payload };
    case 'UPDATE_VAT':
      return { ...state, VAT: action.payload };
    case 'UPDATE_ALLERGEN':
      return { ...state, allergen: action.payload };
    case 'UPDATE_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'UPDATE_TAG':
      return { ...state, tag: action.payload };
    case 'UPDATE_farmer_id': // BAPTISTE?
      return { ...state, descripfarmer_idtion: action.payload };
    default:
      return state;
  }
};

// This file allows to add products into my list
export default function ProductsNew(props) {
  const { currentUser } = React.useContext(AuthContext);
  // TO NAVIGATE INTO OTHERS PAGES
  // to change into Dasboard page
  const goToProduitsNew = () => {
    props.navigation.push('ProduitsNew');
  };
  // to change into Dasboard page
  const goToDashboard = () => {
    props.navigation.push('Dashboard');
  };
  // to change into products page
  const goToProductsList = () => {
    props.navigation.push('ProductsList');
  };
  // to change into Stock page
  const goToStockList = () => {
    props.navigation.push('StockList');
  };

  // variables linked to useReducer
  const [FormNewProduct, formDispatch] = React.useReducer(formReducer, initialFormNewProduct);
  const [selectedImage, setSelectedImage] = React.useState(null); // to guarantee image be showed

  // Helpfull to User, and to the Web: easy way to guarantee unitys will
  // be read by Picker module in a pre-selection mode
  const [unite, setUnite] = React.useState();
  // Helpfull to User, and to the Web: easy way to guarantee season will
  // be read by Picker module in a pre-selection mode
  const [season, setSeason] = React.useState();
  const [transformation, setTransformation] = React.useState();

  // to guarantee the control of a picture from the farmer
  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  // to control guarantee of all important fields have been fully filled in
  const invalideForm = () => initialFormNewProduct.name === '' || initialFormNewProduct.origin === '' || initialFormNewProduct.description === '' || initialFormNewProduct.production_unit === '' || initialFormNewProduct.production_unit === '' || initialFormNewProduct.production_price === '' || initialFormNewProduct.season_id === '' || initialFormNewProduct.category === '' || initialFormNewProduct.stock_min === '' || initialFormNewProduct.tag === '' || initialFormNewProduct.farming_type === '' || initialFormNewProduct.VAT === '';

  // the next step is to insert data from the product form into DataBase
  const registerProduct = async () => {
    // to adapte all variables between front-end and server
    try {
      api.axios
        .post(
          `${api.apiUrl}/farmers/${currentUser.id}/products/`,
          {
            EAN_code: eanCode,
            name,
            description,
            origin,
            farming_type: farmingType,
            category,
            under_category,
            season_id,
            allergen,
            transformation: underCategory,
            nutritional_statement: nutritionalStatement,
            production_unit: productionUnit,
            production_price: productionPrice,
            stock_min: stockMin,
            stock_max: stockMax,
            max_storage_date: maxStorageDate,
            purchase_unit: purchaseUnit,
            purchase_price: purchasePrice,
            VAT: vat,
            tag,
            photo,
            farmer_id: farmerId,
          },
        );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView>

            <View style={styles.header2}>
              <View style={styles.tab1}>
                <TouchableOpacity
                  onPress={() => (goToProductsList)}
                  title="ProductsNew"
                >
                  <Text style={styles.titleTabSelect}> Produits  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tab2}>
                <TouchableOpacity
                  onPress={() => (goToStockList)}
                  title="StockList"
                >
                  <Text style={styles.titleTabNoSelect}>   Stock   </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.body}>
              {/* principal information about the product */}
              <View style={styles.spaceBetweenBtn}>
                <View>
                  <TouchableOpacity
                    onPress={() => (goToProductsList())}
                    title="ProduitList"
                    style={styles.btnPress}
                  >
                    <Text style={styles.titleButton}>
                      Ma liste des produits
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputHalf}>
                <View>
                  <Text style={styles.text}> Descrire le produit  </Text>
                  <TextInput
                    mode="outlined"
                    label="Nom du produit"
                    value={FormNewProduct.name}
                    style={styles.input}
                    onChange={(e) => formDispatch({ type: 'UPDATE_NAME', payload: e.target.value })}
                    placeholder="Nom du produit"
                    minLength={2}
                  />
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.text}> Photo du produit </Text>
                  <TouchableOpacity onPress={() => { openImagePickerAsync(); }}>
                    {(selectedImage !== null)
                      ? (
                        <Image
                          source={{ uri: selectedImage.localUri }}
                          style={styles.inputViewHalfIn2}
                        />
                      )
                      : <IconPhoto style={styles.button} />}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputHalf}>
                <TextInput
                  mode="outlined"
                  label="Origine du produit"
                  value={FormNewProduct.origin}
                  style={styles.inputViewHalfIn2}
                  onChange={(e) => formDispatch({ type: 'UPDATE_ORIGIN', payload: e.target.value })}
                  placeholder="Region de production"
                  minLength={2}
                />
                <TextInput
                  mode="outlined"
                  label="Type de nourriture"
                  value={FormNewProduct.category}
                  style={styles.inputViewHalfIn2}
                  onChange={(e) => formDispatch({ type: 'UPDATE_CATEGORY', payload: e.target.value })}
                  placeholder="Légume, fruit,.."
                  minLength={2}
                />
              </View>
              <View style={styles.inputHalf}>
                <Text style={styles.titleDoc}> Unites:  </Text>
                <View style={styles.allPickers}>
                  <Picker
                    selectedValue={unite}
                    onValueChange={(itemValue, itemIndex) => setUnite(itemValue, itemIndex)}
                  >
                    <Picker.Item label="Kg" value="Kg" Key={1} />
                    <Picker.Item label="Grammes" value="Grammes" Key={2} />
                    <Picker.Item label="Sac" value="Sac" Key={3} />
                    <Picker.Item label="Pot" value="Pot" Key={4} />
                    <Picker.Item label="Bol" value="Bol" Key={5} />
                    <Picker.Item label="Piéce" value="Piéce" Key={6} />
                    <Picker.Item label="Autre option" value="Autre" Key={7} />
                  </Picker>
                </View>
                <Text style={styles.titleDoc}> Season:  </Text>
                <View style={styles.pickers1}>
                  <Picker
                    selectedValue={season}
                    onValueChange={(itemValue, itemIndex) => setSeason(itemValue, itemIndex)}
                  >
                    <Picker.Item label="Printemps" value="1" Key={1} />
                    <Picker.Item label="Été" value="2" Key={2} />
                    <Picker.Item label="Autome" value="3" Key={3} />
                    <Picker.Item label="Hiver" value="4" Key={4} />
                  </Picker>
                </View>
              </View>
              <View style={styles.inputHalf}>
                <TextInput
                  mode="outlined"
                  label="Nutri- Score: A-E"
                  value={FormNewProduct.nutritional_statement}
                  style={styles.inputViewHalfLitle1}
                  onChange={(e) => formDispatch({ type: 'UPDATE_NUTRITIONAL_STATEMENT', payload: e.target.value })}
                  placeholder="Échelle Nutritionelle"
                  minLength={1}
                />
                <TextInput
                  mode="outlined"
                  label="Durée avant perempetion"
                  value={FormNewProduct.max_storage_date}
                  style={styles.inputViewHalfLitle2}
                  onChange={(e) => formDispatch({ type: 'UPDATE_MAX_STORAGE_DATE', payload: e.target.value })}
                  placeholder="Perempetion en Jours"
                  minLength={2}
                />
              </View>
              {/* secundary information about the product */}
              <TextInput
                mode="outlined"
                label="Agriculture bio, pesticides, herbicides,..."
                value={FormNewProduct.farming_type}
                style={styles.input}
                onChange={(e) => formDispatch({ type: 'UPDATE_FARMING_TYPE', payload: e.target.value })}
                placeholder="Type de production"
                minLength={2}
              />
              <View style={styles.inputHalf}>
                <TextInput
                  mode="outlined"
                  label="Prix par unité"
                  value={FormNewProduct.production_price}
                  style={{
                    fontSize: 15,
                    height: 50,
                    backgroundColor: '#FFFFFF',
                    marginTop: 10,
                    width: '30%',
                  }}
                  onChange={(e) => formDispatch({ type: 'UPDATE_PRODUCTION_PRICE', payload: e.target.value })}
                  placeholder="€"
                  minLength={1}
                />
                <Text style={styles.titleDoc}> Produit Transformé:  </Text>
                <View style={styles.allPickers}>
                  <Picker
                    selectedValue={transformation}
                    onValueChange={
                      (itemValue, itemIndex) => setTransformation(itemValue, itemIndex)
                    }
                  >
                    <Picker.Item label="Oui" value="1" Key={1} />
                    <Picker.Item label="Non" value="2" Key={2} />
                  </Picker>
                </View>
              </View>
              <View style={styles.inputHalf}>
                <TextInput
                  mode="outlined"
                  label="Season du produit"
                  value={FormNewProduct.season_id}
                  style={styles.inputViewHalfIn2}
                  onChange={(e) => formDispatch({ type: 'UPDATE_SEASON_ID', payload: e.target.value })}
                  placeholder="Season"
                  minLength={3}
                />
                <TextInput
                  mode="outlined"
                  label="Kg, grammes, piéce, sac..."
                  value={FormNewProduct.production_unit}
                  style={styles.inputViewHalfIn2}
                  onChange={(e) => formDispatch({ type: 'UPDATE_PRODUCTION_UNIT', payload: e.target.value })}
                  placeholder="Unité"
                  minLength={2}
                />
              </View>
              <View style={styles.inputHalf}>
                <TextInput
                  mode="outlined"
                  label="EAN"
                  value={FormNewProduct.EAN_code}
                  style={styles.inputViewHalfIn2}
                  onChange={(e) => formDispatch({ type: 'UPDATE_EAN_CODE', payload: e.target.value })}
                  placeholder="Code EAN du produit"
                  minLength={2}
                />
                <TextInput
                  mode="outlined"
                  label="VAT"
                  value={FormNewProduct.VAT}
                  style={styles.inputViewHalfIn2}
                  onChange={(e) => formDispatch({ type: 'UPDATE_VAT', payload: e.target.value })}
                  placeholder="VAT spécifique du produit"
                  minLength={2}
                />
              </View>
              <TextInput
                mode="outlined"
                label="Description"
                value={FormNewProduct.description}
                style={styles.input}
                onChange={(e) => formDispatch({ type: 'UPDATE_DESCRIPTION', payload: e.target.value })}
                placeholder="Quelles sont les caracteristiques selon vous"
              />
              <TextInput
                mode="outlined"
                label="Tag"
                value={FormNewProduct.tag}
                style={styles.input}
                onChange={(e) => formDispatch({ type: 'UPDATE_TAG', payload: e.target.value })}
                placeholder="Mots-clés pour rechercer le produit"
                minLength={2}
              />
            </View>

            <View>
              <View style={styles.spaceBetweenBtn}>
                <TouchableOpacity
                  onPress={() => (goToDashboard)}
                  title="DashBoard"
                  style={styles.btnPress}
                >
                  <Text style={styles.titleButton}> Annuler  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => (goToProductsList)}
                  title="ProductsList"
                  style={styles.btnPress}
                >
                  <Text style={styles.titleButton}> Mes Produits  </Text>
                </TouchableOpacity>
                {/*
                POURQUOI CECI N A APPARAIT PAS?!?!
                */}

                <TouchableOpacity
                  onPress={() => (registerProduct() && goToProductsList())}
                  title="Registre"
                  disabled={invalideForm()}
                  style={styles.btnPress}
                  color={invalideForm() ? '#FFBD59' : '#616161'}
                >
                  {/*
                  POURQUOI CECI N A APPARAIT PAS?!?!
                  */}
                  {invalideForm()
                    ? <Text style={styles.alertPass}> </Text>
                    : (
                      <Text style={styles.alertPass}>
                        Cliquez sur Suivant si et seulement si vous êtes sur
                        de l&apos;encodage de ces données
                      </Text>
                    )}
                </TouchableOpacity>
              </View>
            </View>
            <Menu />
            <View style={styles.footer} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
}
