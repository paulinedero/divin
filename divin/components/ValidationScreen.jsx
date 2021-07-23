/* eslint-disable global-require */
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import EyeIn from './EyeIn';
import EyeOut from './EyeOut';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  logo_divin: {
    width: 270,
    height: 270,
    marginTop: 40,
    opacity: 0.8,
  },

  strutureGeneral: {
    marginLeft: '5%',
    marginRight: '6%',
  },

  greenBack: {
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 35,
    width: '100%',
    height: 400,
    backgroundColor: '#448042',
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
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.5,
    elevation: 6,
  },

  text: {
    alignItems: 'center',
    marginTop: 5,
    color: '#FE984E',
  },

  colorFontBtn: {
    color: '#FFF',
    fontSize: 18,
  },

  passInput: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  passInputHalf: {
    width: '90%',
    marginTop: 10,
  },

  passInputHalf2: {
    width: '8%',
    justifyContent: 'center',
  },

  forgetMDP: {
    alignItems: 'center',
    marginTop: 15,
    color: '#FE984E',
  },

  errorMessage: {
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FE984E',
    shadowRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 5,
    fontSize: 18,
    color: '#696969',
    textAlign: 'center',
  },

  displayErrorMessage: {
    display: 'none',
  },
});

const ValidationScreen = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [seePassword, setSeePassword] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  const invalideForm = () => email === '' || password === '';

  const handleSubmit = () => {
    const credentials = { email, password };
    console.log(credentials);
    axios
      .post('http://192.168.50.195:3000/farmers/login', credentials)
      .then((response) => {
        const result = response.data;
        if (response.status !== 200) {
          setErrorMessage(result);
        }
        props.navigation.push('Dashboard');
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <ScrollView>
        <StatusBar />
        <View style={styles.container}>
          <Image style={styles.logo_divin} source={require('../assets/logo_divin.png')} />

          <View style={styles.strutureGeneral}>

            <View style={styles.passInput}>
              <TextInput
                mode="outlined"
                style={styles.passInputHalf}
                label="EMAIL"
                placeholder="Entrez votre email"
                value={email}
                onChangeText={(element) => { setEmail(element); }}
              />
              <TextInput
                mode="outlined"
                label="MOT DE PASSE"
                value={password}
                style={styles.passInputHalf}
                onChangeText={(element) => { setPassword(element); }}
                secureTextEntry={seePassword}
                placeholder="Entrez votre mot de passe"
              />
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="white"
                style={styles.passInputHalf2}
                onPress={() => setSeePassword(!seePassword)}
              >
                {/* hiding pass or showing pass  */}
                {seePassword ? <EyeOut /> : <EyeIn />}
              </TouchableHighlight>
            </View>

            <Pressable style={styles.text} onPress={() => { }}>
              <Text style={styles.text}>Email ou mot de passe oublié ?</Text>
            </Pressable>
          </View>
          <View style={styles.greenBack}>
            <TouchableOpacity
              onPress={handleSubmit}
              title="S'inscrire"
              disabled={invalideForm()}
              style={styles.btnPress}
            >
              <Text
                style={styles.colorFontBtn}
              >
                Suivant
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingWrapper>
  );
};

export default ValidationScreen;
