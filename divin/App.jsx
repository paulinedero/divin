import React from 'react';
import { View } from 'react-native';
import InscriptionsPage from './components/InscriptionsPage';
//import ButtonAcessAll from './components/ButtonAcessAll';
//import Dashboard from './components/ButtonAcessAll';
//import Button from './components/Button';
//import Guardar from './components/Guardar';
import ClosedEye from './components/ClosedEye';
import OpenEye from './components/OpenEye';

export default function App() {
  return (
    <View>
      <InscriptionsPage />
      <ClosedEye />
      <OpenEye />
    </View>
  );
}
