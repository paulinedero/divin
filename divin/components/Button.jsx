import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Dashboard from './Dashboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    height: 'autofill',
    borderRadius: 8,
    padding: 6,
  },
});

const Button = () => {
  const [next, setNext] = useState(0);
  const [color, setColor] = useState('');

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setNext(<Dashboard />);
        }}
        onClick={() => { setColor('#FFBD59'); }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#FFBD59' : '#FF914D' }, styles.wrapperCustom]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default Button;
