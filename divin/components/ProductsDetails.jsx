import React from 'react';
import axios from 'axios';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';

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
    color: '#F5F5F5',
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 20,
    backgroundColor: '#FFBD59',
  },
  textTitle: {
    alignItems: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#FFBD59',
    marginBottom: 10,
    position: 'relative',
    left: 50,
  },
  textDetails: {
    fontSize: 16,
    color: '#696969',
  },
  textDetailsApi: {
    fontSize: 16,
    color: '#FFBD59',
  },
  subTitle: {
    borderRadius: 5,
    borderColor: '#FFBD59',
    borderWidth: 1,
    margin: 5,
    position: 'relative',
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
    alignItems: 'center',
    borderRadius: 20,
    width: 130,
    height: 130,
    minWidth: 75,
    minHeight: 75,
    margin: 10,
  },
  productDetails: {
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 2,
    borderColor: '#B6D1B5',
    position: 'relative',
    zIndex: 4,
    bottom: 90,
    right: 15,
  },
  productCard: {
    paddingTop: 45,
    borderRadius: 5,
    backgroundColor: '#B6D1B5',
    position: 'relative',
    zIndex: 2,
    left: 80,
    bottom: 70,
  },
  splashTitle: {
    position: 'relative',
    zIndex: 4,
    top: 55,
    right: 75,
  },
  footer: {
    display: 'flex',
    width: '100%',
    height: 30,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#448042',
    marginTop: '10%',
  },
});

// This file allows to see each product details from all list of products
export default function ProductsDetails(props) {
  // const product.id = props.match.params.id; // ?? LINK?!

  // TO NAVIGATE INTO OTHERS PAGES
  // to change into ProductsList page
  const goToProductsList = () => {
    props.navigation.push('ProductsList');
  };
  // to change into StockssList page
  const goToStocksList = () => {
    props.navigation.push('StocksList');
  };

  const [productDetail, setProductDetail] = React.useState('');

  React.useEffect(() => {
    axios
      .get('http://192.168.1.54:3000/farmers/12/products/9')
      // .get(`https://localhost:3000/farmer/${farmer.id}/products/${product.id}`) // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      .then((response) => response.data)
      .then((data) => {
        setProductDetail(data.[0]);
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
              <View style={styles.subTitle}>
                <Text style={styles.textDetails}>
                  Mots - clés:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.tag}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Prix de vente par unité:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.purchase_price}
                    €
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Produit crée le:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {moment(productDetail.creation_date).format('DD/MM/YYYY')}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.productCard}>
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
                  Quantité minimale:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.stock_min}
                    {' '}
                    {productDetail.production_unit}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Quantité maximal:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.stock_max}
                    {' '}
                    {productDetail.production_unit}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Vente par / au :
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.purchase_unit}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Prix de Production:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.production_price}
                    {' '}
                    €
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  VAT spécifique du produit:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.VAT}
                    {' '}
                    €
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Durée avant perempetion:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.max_storage_date}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Type de nourriture:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.category}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Season:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.season_id}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Type de production:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.farming_type}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Produit Transformé:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.transformation}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Échelle Nutritionelle:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.nutritional_statement}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Code EAN du produit:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.EAN_code}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Region de production:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.origin}
                  </Text>
                </Text>
                <Text style={styles.textDetails}>
                  Description:
                  {' '}
                  <Text style={styles.textDetailsApi}>
                    {productDetail.description}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
}
