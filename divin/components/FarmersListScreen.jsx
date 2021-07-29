import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import FarmersCard from './FarmersCard';
import Menu from './Menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    backgroundColor: '#F5F5F5',
  },
  text: {
    color: '#FE984E',
    marginBottom: 30,
    fontSize: 20,
  },
});

export default function FarmersListScreen(props) {
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
      <View>
        <FarmersCard />
      </View>
      <View>
        <Menu />
      </View>
    </ScrollView>
  );
}
