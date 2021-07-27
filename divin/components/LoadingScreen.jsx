import * as React from 'react';
import { View, Image } from 'react-native';
import adaptiveIcon from '../assets/adaptive-icon.png';

export default function LoadingScreen() {
  return (
    <View>
      <Image source={adaptiveIcon} />
    </View>
  );
}
