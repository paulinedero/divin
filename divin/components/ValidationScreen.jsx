import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tinyLogo: {
    width: 260,
    height: 240,
    marginTop: 25,
    opacity: 0.8,
  },
  input1: {
    margin: 20,
    fontSize: 15,
    borderBottomWidth: 1,

  },
  input2: {
    margin: 20,
    marginTop: 25,
    marginBottom: 30,
    fontSize: 15,
    borderBottomWidth: 1,

  },
  textConfig: {
    width: '100%',
    marginTop: 30,
    color: '#FFBD59',
  },
  greenBack: {
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 35,
    width: '100%',
    height: 300,
    backgroundColor: '#448042',
  },
  btnPress: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: '75%',
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
  colorFontBtn: {
    color: '#ffffff',
    fontSize: 18,
  },
  inputContainerStyle: {
    height: 40,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFFFFF',

  },

});

const ValidationScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <KeyboardAvoidingWrapper>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.tinyLogo} source={require('../assets/Logo-prod.jpg')} />
          <View style={styles.textConfig}>
            <TextInput
              mode="outlined"
              style={styles.inputContainerStyle}
              label="Email"
              placeholder="Entrez votre email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              mode="outlined"
              style={styles.inputContainerStyle}
              label="Mot de passe"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChangeText={() => setPassword(password)}
            />
          </View>
          <View style={styles.textConfig}>
            <Button
              onPress={() => { }}
              title="Email ou mot de passe oublié ?"
              color="#FE984E"
            />
          </View>
          <View style={styles.greenBack}>
            <Pressable style={styles.btnPress} onPress={() => { }}>
              <Text style={styles.colorFontBtn}>Suivant</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingWrapper>
  );
};

export default ValidationScreen;

