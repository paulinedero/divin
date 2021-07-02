import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default function DashboardProductCard(props, { name, quantity }) {
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{quantity}</Text>
      </View>
    </ScrollView>
  );
}
