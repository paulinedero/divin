import React from 'react';
import MapView from 'react-native-maps';
import { Text, TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import Menu from './Menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
  },
  onglet: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
  },
  text: {
    color: '#FE984E',
    marginBottom: 30,
    fontSize: 20,
  },
  view_map: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  map: {
    width: '90%',
    height: 400,
    borderRadius: 20,
  },
});

export default function CarteScreen(props) {
  const goToMap = () => {
    // eslint-disable-next-line react/prop-types
    props.navigation.push('Map');
  };
  const goToList = () => {
    // eslint-disable-next-line react/prop-types
    props.navigation.push('List');
  };
  /*
  const goToFav = () => {
    // eslint-disable-next-line react/prop-types
    props.navigation.push('Favorites');
  };
  */

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.onglet}>
          <TouchableOpacity
            onPress={goToMap}
          >
            <Text style={styles.text}>Carte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToList}
          >
            <Text style={styles.text}>Liste</Text>
          </TouchableOpacity>
          {/*
          <TouchableOpacity
            onPress={goToFav}
          >
            <Text style={styles.text}>Favori</Text>
          </TouchableOpacity>
          */}
        </View>
        <View style={styles.view_map}>
          <MapView style={styles.map} />
        </View>
        <View>
          <Menu />
        </View>
      </View>
    </ScrollView>
  );
}
