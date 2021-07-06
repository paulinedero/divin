import * as React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import FarmersListScreen from './FarmersListScreen';

const sampleData = [
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    city: 'Nantes',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mrs', first: 'asuncion', last: 'gomez' },
    email: 'asuncion.gomez@example.com',
    city: 'Nantes',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
    },
  },
  {
    name: { title: 'miss', first: 'gilcenira', last: 'ribeiro' },
    email: 'gilcenira.ribeiro@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
  },
  {
    name: { title: 'miss', first: 'gilcenira', last: 'ribeiro' },
    email: 'gilcenira.ribeiro@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
  },
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
  {
    name: { title: 'mr', first: 'karl', last: 'johnson' },
    email: 'karl.johnson@example.com',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  center_logo: {
    alignItems: 'center',
  },
  logo_prod: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  option_list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#FE984E',
    marginBottom: 30,
  },
});

export default function FarmersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.center_logo}>
        <Image style={styles.logo_prod} source={require('../assets/logo_prod.png')} />
      </View>
      <View style={styles.option_list}>
        <Pressable><Text style={styles.text}>Carte</Text></Pressable>
        <Pressable><Text style={styles.text}>Liste</Text></Pressable>
        <Pressable><Text style={styles.text}>Favori</Text></Pressable>
      </View>
      <View>
        <FarmersListScreen data={sampleData} />
      </View>
    </View>
  );
}
