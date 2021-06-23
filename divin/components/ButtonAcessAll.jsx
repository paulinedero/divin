import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import plusVert from '../assets/plusVert.svg';
import peopleOrange from '../assets/peopleOrange.svg';
import graphiqueVert from '../assets/graphiqueVert.svg';
import panierJaune from '../assets/panierJaune.svg';

export default function ButtonAcessAll() {
  const styles = {
    page: {
      backgroundColor: 'white',
    },
    iconPanier: {
      width: 55,
      height: 55,
      color: '#FFBD59',
    },
    peopleOrange: {
      width: 55,
      height: 55,
      color: '#FF914D',
    },
    graphiqueVert: {
      width: 55,
      height: 55,
      color: '#9CCF7E',

    },
    plusVert: {
      width: 55,
      height: 55,
      color: '#43B05C',

    }
  };

  console.log('Dashboard');
  return (
    <View>
      <View style={styles.centralDownBar}>
        <Button
          onPress={() => (
            console.log('Les champs sont remplis.'),
            alert('you clicked me')
            //navigate('Dashboard')
          )}
          title="S'inscrire"
          color='#FFBD59'
        >
          <Text>Butoao</Text>
        </Button>
        <Button title='iconPanier' onPress={() => (
          console.log('iconPanier'),
          alert('iconPanier')
        )} >
          <Image style={styles.iconPanier} source={panierJaune.svg} />
        </Button>
        <Button
          name='peopleOrange'
          onPress={() => (
            console.log('peopleOrange'),
            alert('peopleOrange'))} >
          <Image style={styles.peopleOrange} source={peopleOrange.svg} />
        </Button>
        <Button name='graphiqueVert'
          onPress={() => (
            console.log('graphiqueVert'),
            alert('graphiqueVert'))} >
          <Image style={styles.graphiqueVert} source={graphiqueVert.svg} />
        </Button>
        <Button name='plusVert'
          onPress={() => (
            console.log('plusVert'),
            alert('plusVert'))} >
          <Image style={styles.plusVert} source={plusVert.svg} />
        </Button>
      </View >
    </View>
  );
}
