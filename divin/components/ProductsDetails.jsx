import React from 'react';
import axios from 'axios';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


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
    // justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: '#889988',
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

export default function ProductsDetails() { // props
  // const product.id = props.match.params.id; // ?? LINK?!

  const [productDetail, setProductDetail] = React.useState([]);

  // TO NAVIGATE INTO OTHERS PAGES
  // to change into ProductsList page
  const goToProductsList = () => {
    props.navigation.push('ProductsList');
  };
  // to change into StockssList page
  const goToStocksList = () => {
    props.navigation.push('StocksList');
  };
  React.useEffect(() => {
    axios
      .get('http://192.168.1.54:3000/farmers/12/products/10') /// ?!?!?!!??!
      // .get(`https://localhost:3000/farmer/${farmer.id}/products/${product.id}`) // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setProductDetail(data);
      });
  }, []);

  "EAN_code": 26, Code EAN du produit
  "VAT": 1, VAT spécifique du produit
  Allergène
  "creation_date": "2021-07-13T22:00:00.000Z",
    "description": "pleine terre", Description
  "farming_type": 1,
    "id": 18,
      "max_storage_date": "3 jours", Durée avant perempetion
  "nutritional_statement": "nutriscore A", Échelle Nutritionelle
  "origin": "Montpellier", Region de production
  "production_price": 1,
    "production_unit": "kg", Unites
  "purchase_unit": "pièce",
    "season_id": 1, Season
      < Picker.Item label = "Printemps" value = "1" Key = { 1} />
        <Picker.Item label="Été" value="2" Key={2} />
        <Picker.Item label="Autome" value="3" Key={3} />
        <Picker.Item label="Hiver" value="4" Key={4} 
          "stock_max": 2, Quantité maximale
  "stock_min": 1, Quantité minimale
  "tag": "legume, salade, frais", Mots - clés pour rechercer le produit
  "transformation": 0, Produit Transformé
  "under_category": 1,
  * /

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
            <View style={styles.splashTitle}>
              <View style={styles.textTitle}>
                <Text style={styles.title}>
                  {productDetail.name}
                </Text>
              </View>
            </View>
            <View style={styles.splashImage}>
              <Image
                style={styles.photoIcon}
                source={require('../assets/ImageBanniereProducteur.png')} // HOW TO RECOVERY the PRINCIPAL IMAGE!?
              />
            </View>
          </View>
          <View style={styles.splashDetails}>
            <View style={styles.productDetails}>
              <Text style={styles.textDetails}>
                Type de nourriture:
                {' '}
                {productDetail.category}
              </Text>
              <Text style={styles.textDetails}>
                Prix par unité:
                {' '}
                {productDetail.purchase_price}
                €
              </Text>
              <Text style={styles.textDetails}>
                Type de production:
                {' '}
                {productDetail.farming_type}
                €
              </Text>
              <Text style={styles.textDetails}>
                Prix par unité:
                {' '}
                {productDetail.purchase_price}
                €
              </Text>
              <Text style={styles.textDetails}>
                Prix par unité:
                {' '}
                {productDetail.purchase_price}
                €
              </Text>
              <Text style={styles.textDetails}>
                Prix par unité:
                {' '}
                {productDetail.purchase_price}
                €
              </Text>
              <Text style={styles.textDetails}>
                Produit crée le:
              </Text>
              <Text style={styles.textDetails}>
                {date}
              </Text>
            </View>
          </View>

        </View>
            </View>
          </View>
        </View >
    <View style={styles.footer} />
      </ScrollView >
    </SafeAreaView >
  );
}