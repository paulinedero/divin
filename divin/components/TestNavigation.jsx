import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  option_list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
  },
  text: {
    color: '#FE984E',
    marginBottom: 30,
    fontSize: 20,
  },
});

export default function TestNavigation() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.option_list}>
          <TouchableOpacity>
            <Text style={styles.text}>TEST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
