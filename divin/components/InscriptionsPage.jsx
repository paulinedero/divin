import React from 'react';
import {
  View,
  StatusBar,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

import InscriptionIconPhoto from '../assets/InscriptionIconPhoto.svg';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import ClosedEye from './ClosedEye';
import OpenEye from './OpenEye';

const styles = StyleSheet.create({
  container: {
    //    flex: 1, //give errors on others devices but no errors on browser
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFBD59',
  },
  ImageBanniereProducteur: {
    marginTop: 25,
    width: 150,
    height: 150,
    alignItems: 'center',
  },
  footer: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    marginTop: 35,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    color: 'white',
  },
  strutureGeneral: {
    marginBottom: 20,
    marginLeft: 40,
  },
  textConfig: {
    marginTop: 30,
    color: '#FFBD59',
  },
  struture: {

  },
  photo: {
    alignItems: 'center',
  },
  input: {
    marginTop: 17,
    fontSize: 15,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 40,
  },
  line: {
    height: 2,
    width: '90%',
    borderRadius: 15,
    backgroundColor: 'gray',
    marginTop: 1,
  },
  passInput: {
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    // fontfamily: 'Comfortaa',
    // fontsize: 12,
    padding: 10,
    color: 'white',
  },
});

export default function InscriptionsPage() {
  const [email, onChangeEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [firstname, onChangeFirstname] = React.useState('');
  const [lastname, onChangeLastname] = React.useState('');
  const [birthday, onChangeBirthday] = React.useState('');
  const [numberSiret, onChangeNumberSiret] = React.useState('');
  const [numberTva, onChangeNumberTva] = React.useState('');
  const [seePassword, setSeePassword] = React.useState(true);
  const [seeConfirmPassword, setSeeConfirmPassword] = React.useState(true);

  const invalideForm = () => {
    // eslint-disable-next-line max-len
    console.log(email, password, confirmPassword, firstname, lastname, birthday, numberSiret, numberTva);
    return email === '' || password === '' || confirmPassword === '' || firstname === '' || lastname === '' || birthday === '' || numberSiret === '' || numberTva === '';
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <StatusBar />
        <View>
          <Image style={styles.ImageBanniereProducteur} source={ImageBanniereProducteur} />
        </View>
        <Text style={styles.title}>INSCRIPTION</Text>
        <View style={styles.footer}>
          <View style={styles.strutureGeneral}>
            <Text style={styles.textConfig}> Informations de personnelles </Text>
            <SafeAreaView style={styles.struture}>
              <TextInput
                value={lastname}
                style={styles.input}
                onChangeText={onChangeLastname}
                placeholder="NOM"
                minLength={3}
              />
              <TextInput
                value={firstname}
                style={styles.input}
                onChangeText={onChangeFirstname}
                placeholder="PRENOM"
                minLength={3}
              />
              <TextInput
                type="date"
                style={styles.input}
                placeholder="DATE DE NAISSANCE"
                length={8}
                onChangeText={onChangeBirthday}
                value={birthday}
              />
              <TextInput
                type="email"
                value={email}
                style={styles.input}
                onChangeText={onChangeEmail}
                placeholder="EMAIL"
              />
              {/* password */}
              <View>
                <TextInput
                  value={password}
                  name="password"
                  style={styles.input}
                  onChangeText={setPassword}
                  secureTextEntry
                  placeholder="MOT DE PASSE"
                  minLength={8}
                />
                <TouchableWithoutFeedback onPress={() => setSeePassword(!seePassword)}>
                  {seePassword
                    ? <ClosedEye />
                    : <OpenEye />}
                </TouchableWithoutFeedback>
              </View>
              {/* confirmation Password */}
              <View style={styles.passInput}>
                <TextInput
                  style={styles.input}
                  value={confirmPassword}
                  name="confirmPassword"
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  placeholder="CONFIRMATION DE PASSE"
                  minLength={8}
                />
                <TouchableWithoutFeedback onPress={() => setSeeConfirmPassword(!seeConfirmPassword)}>
                  {seeConfirmPassword
                    ? <ClosedEye />
                    : <OpenEye />}
                </TouchableWithoutFeedback>
              </View>
              {password !== confirmPassword
                ? <Text sytle={styles.alertPass}>  Les mots de passe doivent être identiques</Text>
                : null}
            </SafeAreaView>
            <Text style={styles.textConfig}> Informations de facturation </Text>
            <SafeAreaView style={styles.struture}>
              <TextInput
                value={numberSiret}
                type="number"
                style={styles.input}
                onChangeText={onChangeNumberSiret}
                placeholder="NUMERO SIRET"
              />
              <TextInput
                value={numberTva}
                style={styles.input}
                onChangeText={onChangeNumberTva}
                placeholder="NUMERO DE TVA"
              />
            </SafeAreaView>
          </View>
          <View style={styles.icons}>
            <View style={styles.photo}>
              <Text style={styles.textConfig}> Photo de profil </Text>
              <TouchableOpacity style={styles.button} onPress={() => { alert('you clicked me') }}>
                <Image style={{ width: 55, height: 55 }} source={{ InscriptionIconPhoto }} />
              </TouchableOpacity>
            </View>
            <View>
              <Button
                onPress={() => (
                  console.log('Les champs sont remplis.'),
                  alert('you clicked me')

                )}
                title="S'inscrire"
                disabled={invalideForm()}
                color={invalideForm() ? '#616161' : '#FFBD59'}
              />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}
