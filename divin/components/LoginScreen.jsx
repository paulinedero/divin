/* eslint-disable global-require */
import * as React from 'react';
import { Text, StyleSheet, Image, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';

export default function LoginScreen(props) {
  const goTo = () => {
    props.navigation.push('Validation');
  };

  const goToInscription = () => {
    props.navigation.push('InscriptionsPage');
  };

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      alignItems: 'center',
    },
    tinyLogo: {
      width: 270,
      height: 270,
      marginTop: 20,
      marginBottom: 20,
      opacity: 0.8,
    },
    text: {
      flexDirection: 'row',
      marginTop: 20,
      fontSize: 10,
      justifyContent: 'center',
    },
    btn: {
      alignItems: 'center',
    },
    btnPress: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      width: '60%',
      height: 50,
      opacity: 0.9,
      borderRadius: 50,
      backgroundColor: '#FE984E',
      fontFamily: 'Arial',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 3.5,
      elevation: 4,
    },
    btnPress1: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      width: '60%',
      height: 50,
      opacity: 0.6,
      borderRadius: 50,
      backgroundColor: '#FF0100',
      fontFamily: 'Arial',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 3.5,
      elevation: 4,
    },
    btnPress2: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: '60%',
      height: 50,
      opacity: 0.9,
      borderRadius: 50,
      backgroundColor: '#FE984E',
      fontFamily: 'Arial',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 3.5,
      elevation: 4,
    },
    colorFontBtn: {
      color: '#ffffff',
      fontSize: 18,
    },
    greenBack: {
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      margin: 45,
      marginTop: 50,
      width: '100%',
      height: 400,
      backgroundColor: '#448042',
    },
  });

  return (
    <KeyboardAvoidingWrapper>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image style={styles.tinyLogo} source={require('../assets/logo_divin.png')} />
          <View style={styles.btn}>

            {/* bouton de connexion  */}

            <TouchableOpacity style={styles.btnPress} onPress={goTo}>
              <View>
                <Text style={styles.colorFontBtn}>Connexion</Text>
              </View>
            </TouchableOpacity>

            {/* Fond vert avec bouton de connexion via Email et Google */}

          </View>
          <View style={styles.greenBack}>
            <View style={styles.text}>
              <Text style={{ color: '#FFFFFF' }}>On attendait que vous !</Text>
            </View>

            <View style={styles.btn}>

              {/* Bouton de connexion via Email */}

              <TouchableOpacity style={styles.btnPress2} onPress={goToInscription}>
                <Text style={styles.colorFontBtn}>Inscription via Email</Text>
              </TouchableOpacity>

              {/* Bouton de connexion via Google */}

              <TouchableOpacity style={styles.btnPress1} onPress={() => { }}>
                <Text style={styles.colorFontBtn}>Inscription via Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingWrapper>
  );
}
