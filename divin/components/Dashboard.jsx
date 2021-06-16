import React from 'react';
import { View, Text, Image } from 'react-native';
//import InscriptionIconPhoto from '../assets/InscriptionIconPhoto.svg';
import plusVert from '../assets/plusVert.svg';
import peopleOrange from '../assets/peopleOrange.svg';
import graphiqueVert from '../assets/graphiqueVert.svg';
import panierJaune from '..//panierJaune.svg';

const Dashboard = () => {
  const styles = {
    page: {
      backgroundColor: '#FF914D',
      fontfamily: 'Comfortaa',
      fontsize: '300px',
    },
    centralDownBar: {

    }
  };

  return (
    <View>
      <Text style={styles.page}> NEw page</Text>
      <View style={styles.centralDownBar}>
        <Image style={{ width: 55, height: 55 }} source={panierJaune.svg} />
        <Image style={{ width: 55, height: 55 }} source={peopleOrange.svg} />
        <Image style={{ width: 55, height: 55 }} source={graphiqueVert.svg} />
        <Image style={{ width: 55, height: 55 }} source={plusVert.svg} />
      </View>
    </View>
  );
};

export default Dashboard;
