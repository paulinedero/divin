import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 80,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 200,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },
  email: {
    fontSize: 20,
  },
  description: {
    marginTop: 25,
    width: '80%',

  },
  place: {
    alignItems: 'center',
    fontSize: 18,
  },
  coordonnées: {
    width: '80%',
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default function FarmersDetails() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image style={styles.img} source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} />
          <FormGroup row>
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite style={{ color: '#FE984E' }} />}
                  name="checkedH"
                />
              )}
            />
          </FormGroup>
        </View>
        <View>
          <Text style={styles.text}>
            Bruck Cliff
            Carcassone
          </Text>
        </View>
        <View style={styles.description}>
          <Text>
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
