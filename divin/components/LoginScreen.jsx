import * as React from 'react';
import { Text, StyleSheet, Image, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';

export default function LoginScreen(props) {
  const goTo = () => {
    // console.log('props', props);
    props.navigation.push('Validation');
  };

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      alignItems: 'center',
    },
    tinyLogo: {
      width: 260,
      height: 240,
      marginTop: 25,
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
      width: 200,
      height: 50,
      opacity: 0.9,
      borderRadius: 50,
      backgroundColor: '#FE984E',
      fontFamily: 'Arial',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 2.5,
      elevation: 6,
    },
    btnPress1: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      width: '50%',
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
      width: '50%',
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
      marginTop: 45,
      minWidth: 400,
      minHeight: 350,
      backgroundColor: '#448042',
    },
  });

  return (
    <KeyboardAvoidingWrapper>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Image style={styles.tinyLogo} source={require('../assets/Logo.png')} />
          <View style={styles.btn}>

            {/* bouton de connexion  */}

            <TouchableOpacity style={styles.btnPress} onPress={goTo}>
              <View>
                <Text style={styles.colorFontBtn}>Connexion</Text>
              </View>
            </TouchableOpacity>

            {/* Fond vert avec bouton de connexion via Email et Google */}

            <View style={styles.greenBack}>
              <View style={styles.text}>
                <Text style={{ color: '#FFFFFF' }}>On attendait que vous !</Text>
              </View>

              <View style={styles.btn}>

                {/* Bouton de connexion via Email */}

                <TouchableOpacity style={styles.btnPress2} onPress={() => { }}>
                  <Text style={styles.colorFontBtn}>Inscription via Email</Text>
                </TouchableOpacity>

                {/* Bouton de connexion via Google */}

                <TouchableOpacity style={styles.btnPress1} onPress={() => { }}>
                  <Text style={styles.colorFontBtn}>Inscription via Google</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingWrapper>
  );
}
