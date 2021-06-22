import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import eyeOpen from '../assets/eyeOpen.svg';

const styles = StyleSheet.create({
  eyeOpen: {
    height: 5,
    width: 5,
  },
});

export default function OpenEye() {
  return (
    <View>
      <Image src={eyeOpen} style={styles.eyeOpen} alt=" " />
    </View>
  );
}
