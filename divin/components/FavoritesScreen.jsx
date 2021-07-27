import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, SafeAreaView } from 'react-native';


const styles = StyleSheet.create({
  container: {
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
// useEffect(() => {
//   axios
//     .get('http://192.168.0.15:3000/farmers/favorites')
//     .then((res) => res.json())
//     .then((data) => {
//       this.setState({
//         isLoading: false,
//         dataSources: data,
//       });
//     });
// }

// useEffect(() => {
//   axios
//     .put()
//     });
// }, []);

export default function FavoritesScreen(props) {
  const goToMap = () => {
    // eslint-disable-next-line react/prop-types
    props.navigation.push('Map');
  };
  const goToList = () => {
    // eslint-disable-next-line react/prop-types
    props.navigation.push('List');
  };
  const goToFav = () => {
    // eslint-disable-next-line react/prop-types
    props.navigation.push('Favorites');
  };

  return (
    <SafeAreaView>
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
        <TouchableOpacity
          onPress={goToFav}
        >
          <Text style={styles.text}>Favori</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
