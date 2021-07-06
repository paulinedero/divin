import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 18,
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: {
    color: 'grey',
  },
});

export default function FarmersCard(props) {
  return (
    <View style={styles.row}>
      <Image
        style={styles.picture}
        // eslint-disable-next-line react/destructuring-assignment
        source={{ uri: props.picture }} />
      <View>
        <Text style={styles.primaryText}>{`${props.name} ${props.firstName}`}</Text>
        <Text style={styles.secondaryText}>{props.email}</Text>
        <Text style={styles.secondaryText}>{props.city}</Text>
      </View>
    </View>
  );
}
