import * as React from 'react';
import { View, Button } from 'react-native-gesture-handler';
import AuthContext from '../context/AuthContext';

export default function LogOut() {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View>

    </View>
  );
}
