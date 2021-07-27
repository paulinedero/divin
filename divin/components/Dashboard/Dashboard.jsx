/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';
import moment from 'moment';
import TopProductCard from './TopProductCard';
import FlopProductCard from './FlopProductCard';
import OrderCard from './OrderCard';

// use of authcontext for farmer info
import AuthContext from '../../context/AuthContext';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5',
    maxWidth: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 'auto',
    marginTop: 40,
    marginRight: 'auto',
    marginBottom: 20,
  },
  mainTitle: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#448042',
    margin: 10,
  },

  subTitle: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FE984E',
    margin: 15,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 18,
    color: 'black',
  },
  periodText: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 18,
    color: '#696969',
  },
  dashboard: {
    marginTop: 30,
    marginBottom: 30,
  },
  chart: {
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#696969',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
  datepicker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  selectButton: {
    width: 'auto',
    backgroundColor: '#448042',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowRadius: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 6,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  greenBack: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    maxWidth: '100%',
    height: 70,
    backgroundColor: '#448042',
  },
});

export default function Dashboard() {
  const { currentUser, signOut } = React.useContext(AuthContext);
  const [topProduct, setTopProduct] = useState([]);
  const [flopProduct, setFlopProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');

  // Fetch top products from API
  useEffect(() => {
    axios
      .get(`http://192.168.1.63:3000/farmers/${currentUser.id}/most-ordered-items`)
      .then((res) => res.data)
      .then((data) => setTopProduct(data));
  }, []);

  // Fetch flop products from API
  useEffect(() => {
    axios
      .get(`http://192.168.1.63:3000/farmers/${currentUser.id}/less-ordered-items`)
      .then((res) => res.data)
      .then((data) => setFlopProduct(data));
  }, []);

  // Chart's data's
  const pieData = [
    {
      name: 'Courges',
      quantity: 2150,
      color: '#FE984E',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Pommes',
      quantity: 2800,
      color: '#448042',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Salades',
      quantity: 527,
      color: '#F9E79F',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Haricots',
      quantity: 853,
      color: '#F4D03F',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Navets',
      quantity: 119,
      color: '#27AE60',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Carottes',
      quantity: 154,
      color: '#F9E79F',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  // Chart's layout
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  // Fetch orders from selected period
  const getOrdersFromPeriod = () => {
    axios
      .get(`http://192.168.1.63:3000/farmers/${currentUser.id}/orders?startdate=${startdate}&enddate=${enddate}`)
      .then((res) => res.data)
      .then((data) => {
        setOrder(data);
      });
  };

  return (
    <ScrollView>
      <View>
        <Button
          onPress={signOut}
          title="Déconnexion"
        />
      </View>
      <View style={styles.body}>
        <Image style={styles.logo} source={require('../../assets/dashboard_logo_divin.png')} />
        <Text style={styles.mainTitle}>
          Bonjour
          {' '}
          {currentUser.firstname}
          {' '}
          !
        </Text>
        <Text style={styles.text}>Voici votre tableau de bord quotidien.</Text>
        <View style={styles.dashboard}>
          <View>
            <Text style={styles.subTitle}>Composition du stock actuel</Text>
            <View style={styles.chart}>
              <PieChart
                data={pieData}
                width={screenWidth}
                height={180}
                chartConfig={chartConfig}
                accessor="quantity"
                backgroundColor="transparent"
              />
            </View>
          </View>
          <Text style={styles.subTitle}>Les plus commandés</Text>
          <View style={styles.topProductCard}>
            {topProduct.map((item, index) => (
              <TopProductCard
                key={index}
                name={item.name.toUpperCase()}
                quantity={item.quantity}
                purchaseUnit={item.unite}
              />
            ))}
          </View>
          <Text style={styles.subTitle}>Les moins commandés</Text>
          <View style={styles.flopProductCard}>
            {flopProduct.map((item, index) => (
              <FlopProductCard
                key={index}
                name={item.name.toUpperCase()}
                quantity={item.quantity}
                purchaseUnit={item.unite}
              />
            ))}
          </View>
          <Text style={styles.subTitle}>Toutes mes commandes</Text>

          <Text style={styles.periodText}>Sélectionner une période :</Text>
          <View style={styles.datepicker}>
            <View>
              <DatePicker
                style={styles.datePickerStyle}
                date={startdate} // Initial date from state
                mode="date"
                placeholder="DU"
                format="YYYY/MM/DD"
                minDate="01-01-2000"
                confirmBtnText="Confirmer"
                cancelBtnText="Annuler"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 0,
                    backgroundColor: 'white',
                    borderRadius: 5,
                  },
                }}
                onDateChange={(date) => {
                  setStartdate(date);
                }}
              />
            </View>
            <View>
              <DatePicker
                style={styles.datePickerStyle}
                date={enddate} // Initial date from state
                mode="date"
                placeholder="AU"
                format="YYYY/MM/DD"
                minDate="01-01-2000"
                confirmBtnText="Confirmer"
                cancelBtnText="Annuler"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 0,
                    backgroundColor: 'white',
                    borderRadius: 5,
                  },
                }}
                onDateChange={(date) => {
                  setEnddate(date);
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => getOrdersFromPeriod()}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.flopProductCard}>
            {order.map((item, index) => (
              <OrderCard
                key={index}
                id={item.id}
                purchaseDate={moment(item.date).format('DD/MM/YYYY')}
                total={item.total}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.greenBack} />
    </ScrollView>
  );
}
