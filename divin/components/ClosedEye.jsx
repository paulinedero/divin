import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import eyeClose from '../assets/eyeClose.svg';

const styles = StyleSheet.create({
  eyeClose: {
    height: 5,
    width: 5,
  },
});

export default function ClosedEye() {
  return (
    <View>
      <Image src={eyeClose} style={styles.eyeClose} alt=" " />
    </View>
  );
}
