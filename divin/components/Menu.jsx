import * as React from 'react';
import {
  View, TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// menu icons
import dashboard from '../assets/dashboard.png';
import product from '../assets/product.png';
import farmers from '../assets/farmers.png';
import logout from '../assets/logout.png';

// Authentication context
import AuthContext from '../context/AuthContext';

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#448042',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 30,
  },
  menuIcons: {
    padding: 5,
    width: 35,
    height: 35,
  },
});

export default function Menu() {
  const { signOut } = React.useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Image source={dashboard} style={styles.menuIcons} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductsList')}
      >
        <Image source={product} style={styles.menuIcons} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MainScreen')}
      >
        <Image source={farmers} style={styles.menuIcons} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={signOut}
      >
        <Image source={logout} style={styles.menuIcons} />
      </TouchableOpacity>
    </View>
  );
}
