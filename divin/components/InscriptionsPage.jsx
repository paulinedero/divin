import React from 'react';
import {
  View,
  StatusBar,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import IconPhoto from './IconPhoto';
import EyeIn from './EyeIn';
import EyeOut from './EyeOut';


const styles = StyleSheet.create({
  container: {
    //   flex: 1 //give errors on others devices but no errors on browser
    alignItems: 'center',
    marginBottom: 100,
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
    marginLeft: '5%',
    marginRight: '6%',
  },
  textConfig: {
    marginTop: 30,
    color: '#FFBD59',
  },
  photo: {
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 17,
  },
  passInput: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 17,
  },
  passInputHalf: {
    width: '90%',
  },
  passInputHalf2: {
    width: '8%',
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginTop: '10%',
  },
  eye: {
    marginRight: '7%',
  },
  alertPass: {
    fontSize: 12,
    color: 'red',
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
  const invalideForm = () => email === '' || password === '' || confirmPassword === '' || firstname === '' || lastname === '' || birthday === '' || numberSiret === '' || numberTva === '';
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
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
            <SafeAreaView>
              <TextInput
                mode="outlined"
                label="NOM"
                value={lastname}
                style={styles.input}
                onChangeText={onChangeLastname}
                placeholder="Entrez votre nom"
                minLength={3}
              />
              <TextInput
                mode="outlined"
                label="PRENOM"
                value={firstname}
                style={styles.input}
                onChangeText={onChangeFirstname}
                placeholder="Entrez votre prenom"
                minLength={3}
              />
              <TextInput
                mode="outlined"
                label="DATE DE NAISSANCE"
                type="date"
                style={styles.input}
                placeholder="Entrez votre date de naissance AAAA-MM-JJ"
                length={8}
                onChangeText={onChangeBirthday}
                value={birthday}
              />
              <View>
                {birthday.length !== 10
                  ? (
                    <Text style={styles.alertPass}>
                      Le format de la date de naissance doit être respecté
                    </Text>
                  ) : null}
              </View>
              <TextInput
                mode="outlined"
                label="EMAIL"
                type="email"
                value={email}
                style={styles.input}
                onChangeText={onChangeEmail}
                placeholder="Entrez votre email"
              />
              {/* password */}
              <View style={styles.passInput}>
                <TextInput
                  mode="outlined"
                  label="MOT DE PASSE"
                  value={password}
                  style={styles.passInputHalf}
                  onChangeText={setPassword}
                  secureTextEntry={seePassword}
                  placeholder="Entrez votre mot de passe"
                />
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="white"
                  style={styles.passInputHalf2}
                  onPress={() => setSeePassword(!seePassword)}
                >
                  {seePassword ? <EyeOut /> : <EyeIn />}
                </TouchableHighlight>
              </View>
              {/* confirmation Password */}
              <View style={styles.passInput}>
                <TextInput
                  mode="outlined"
                  label="CONFIRMATION DE MOT DE PASSE"
                  value={confirmPassword}
                  name="confirmPassword"
                  style={styles.passInputHalf}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={seeConfirmPassword}
                  placeholder="Re-entrez votre mot de passe"
                />
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="white"
                  style={styles.passInputHalf2}
                  onPress={() => setSeeConfirmPassword(!seeConfirmPassword)}
                >
                  {seeConfirmPassword ? <EyeOut /> : <EyeIn />}
                </TouchableHighlight>
              </View>
              <View>
                {password !== confirmPassword
                  ? <Text style={styles.alertPass}> Les mots de passe doivent être identiques</Text>
                  : null}
              </View>
            </SafeAreaView>
            <Text style={styles.textConfig}> Informations de facturation </Text>
            <SafeAreaView>
              <TextInput
                mode="outlined"
                label="NUMERO SIRET"
                value={numberSiret}
                type="number"
                style={styles.input}
                onChangeText={onChangeNumberSiret}
                placeholder="Entrez votre numero SIRET"
              />
              <TextInput
                mode="outlined"
                label="NUMERO TVA"
                value={numberTva}
                style={styles.input}
                onChangeText={onChangeNumberTva}
                placeholder="Entrez votre numero TVA"
              />
            </SafeAreaView>
          </View>
          <View style={styles.icons}>
            <View style={styles.photo}>
              <Text style={styles.textConfig}> Photo de profil </Text>
              <TouchableOpacity onPress={() => { openImagePickerAsync(); }}>
                {setSelectedImage
                  ? (<Image source={{ uri: selectedImage.localUri }}
                    style={{ width: 50, height: 50 }} />)
                  : (<IconPhoto style={styles.button} />)}
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
