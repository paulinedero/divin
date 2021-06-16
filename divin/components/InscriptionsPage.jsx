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
  StackNavigator,
  navigate,
} from 'react-native';
import InscriptionIconPhoto from '../assets/InscriptionIconPhoto.svg';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  strutureGeneral: {
    marginBottom: 20,
    marginLeft: 40,
  },
  title: {
    marginTop: 20,
    //fontSize: 20,
    color: 'white',
  },
  textConfig: {
    //fontfamily: 'Comfortaa',
    //fontsize: '12px',
    marginTop: 30,
    color: '#FFBD59',
  },
  textConfig1: {
    //fontfamily: 'Comfortaa',
    //fontsize: '12px',
    marginTop: 10,
    color: '#FFBD59',
  },
  struture: {

  },
  photo: {
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    //fontSize: 15,
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
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    //fontfamily: 'Comfortaa',
    //fontsize: 12,
    padding: 10,
    color: 'white',
  },
});

export default function InscriptionsPage() {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [repeatPassword, onChangeRepeatPassword] = React.useState('');
  const [firstname, onChangeFirstname] = React.useState('');
  const [lastname, onChangeLastname] = React.useState('');
  const [birthday, onChangeBirthday] = React.useState('');
  const [numberSiret, onChangeNumberSiret] = React.useState('');
  const [numberTva, onChangeNumberTva] = React.useState('');

  const invalideForm = () => {
    // eslint-disable-next-line max-len
    console.log(email, password, repeatPassword, firstname, lastname, birthday, numberSiret, numberTva);
    return email === '' || password === '' || repeatPassword === '' || firstname === '' || lastname === '' || birthday === '' || numberSiret === '' || numberTva === '';
  };

  return (
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
              value={birthday}
              style={styles.input}
              onChangeText={onChangeBirthday}
              placeholder="DATE DE NAISSANCE"
              length={8}
            />
            <TextInput
              value={email}
              style={styles.input}
              onChangeText={onChangeEmail}
              placeholder="EMAIL"
            />
            <TextInput
              value={password}
              style={styles.input}
              onChangeText={onChangePassword}
              placeholder="MOT DE PASSE"
              minLength={8}
            />
            <TextInput
              value={repeatPassword}
              style={styles.input}
              onChangeText={onChangeRepeatPassword}
              placeholder="CONFIRMATION DE PASSE"
              minLength={8}
            />
            {onChangePassword === onChangeRepeatPassword ? ''
              : <Text>  Les mots de passe ne sont pas identiques</Text>}
          </SafeAreaView>
          <Text style={styles.textConfig1}> Informations de facturation </Text>
          <SafeAreaView style={styles.struture}>
            <TextInput
              value={numberSiret}
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
            <Text style={styles.textConfig1}> PHOTO DE PROFIL </Text>
            <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
              <Image style={{ width: 55, height: 55 }} source={InscriptionIconPhoto} />
            </TouchableOpacity>
          </View>
          <View>
            <Button
              onPress={() => (
                console.log('Les champs sont remplis.'),
                navigate('Dashboard')
              )}
              title="S'inscrire"
              disabled={invalideForm()}
              color={invalideForm() ? '#616161' : '#FFBD59'}
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
