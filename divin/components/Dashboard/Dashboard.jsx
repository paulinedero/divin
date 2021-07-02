import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import axios from 'axios';
import DashboardProductCard from './DashboardProductCard';

const styles = StyleSheet.create({
  bodyCard: {
    borderColor: '#696969',
    backgroundColor: '#FFBD59',
    marginTop: 50,
    marginBottom: 15,
    width: 'auto',
    height: 'auto',
    borderRadius: 10,
    borderWidth: 1,
    shadowRadius: 10,
  },
});

export default function Dashboard(props) {
  const [topProduct, setTopProduct] = useState([]);
  // const [flopProduct, setFlopProduct] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.1.63:3000/farmers/5/most-ordered-items')
      .then((res) => res.data)
      .then((data) => setTopProduct(data));
  }, []);
  console.log(topProduct);

  /*
  useEffect(() => {
    axios
      .get('http://192.168.1.63:3000/farmers/5/less-ordered-items')
      .then((res) => res.data)
      .then((data) => console.log(data))
      // .then((data) => setFlopProduct(data));
  }, []);
  */
  return (
    <View>
      {topProduct.map((item, index) => (
        <view>
          <DashboardProductCard
            key={index}
            name={item.name}
            quantity={item.quantity}
          />
        </view>
      ))}

      <Text>Hello</Text>

      {/* }
      <Text style={styles.bodyCard}>
        {flopProduct.map((item, index) => (
          <DashboardProductCard
            key={index}
            name={item.name}
            quantity={item.quantity}
          />
        ))}
      </Text>
        */}
    </View>
  );
}
