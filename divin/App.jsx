import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Dashboard from './components/Dashboard/Dashboard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Dashboard />
        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
}
