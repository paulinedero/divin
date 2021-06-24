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
  useEffect,
} from 'react-native';

import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import IconPhoto from './IconPhoto';
import EyeIn from './EyeIn';
import EyeOut from './EyeOut';
import axios from 'axios';

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
  const [firstname, onChangeFirstname] = React.useState(''); //to guarantee the insertion of name}
  const [lastname, onChangeLastname] = React.useState(''); //to guarantee the insertion of last name}
  const [birthday, onChangeBirthday] = React.useState(''); //to guarantee the insertion of birthday}
  const [email, onChangeEmail] = React.useState(''); //to guarantee the of insert mail} 
  const [password, setPassword] = React.useState(''); //to guarantee the insertion of passaword}
  const [confirmPassword, setConfirmPassword] = React.useState(''); //to guarantee the insertion of the samme password}
  const [seePassword, setSeePassword] = React.useState(true); //to guarantee password be showed}
  const [seeConfirmPassword, setSeeConfirmPassword] = React.useState(true);
  const [numberSiret, onChangeNumberSiret] = React.useState(''); //to guarantee the insertion of finalcialnumber in france}
  const [numberTva, onChangeNumberTva] = React.useState(''); //to guarantee the insertion of finalcialnumber in france}
  //to guarantee the repition password be showed}
  const [selectedImage, setSelectedImage] = React.useState(null); //to guarantee image be showed}
  const invalideForm = () => email === '' || password === '' || confirmPassword === '' || firstname === '' || lastname === '' || birthday === '' || numberSiret === '' || numberTva === '';
  //to guarantee the control from all fields}

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };


  const inscription = async () => {
    //insert data fom farmer in DataBase
    try {
      const result = await axios.post(
        'https://localhost:3000/farmer/',
        { firstname, lastname, birthday, email, password, numberSiret, numberTva, selectedImage }
      );
      console.log(result);
    } catch (err) {
      console.error(err)
    }
  }

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
              {/* personnal information about the seller */}
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
              {/* password and hide 1st password button  */}
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
                  {/* hiding pass or showing pass  */}
                  {seePassword ? <EyeOut /> : <EyeIn />}
                </TouchableHighlight>
              </View>
              {/* confirmation Password and hide 2nd password button */}
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
                  {/* hiding pass or showing pass  */}
                  {seeConfirmPassword ? <EyeOut /> : <EyeIn />}
                </TouchableHighlight>
              </View>
              <View>
                {password !== confirmPassword
                  ? <Text style={styles.alertPass}> Les mots de passe doivent être identiques</Text>
                  : null}
              </View>
            </SafeAreaView>
            {/* Information about financial and enterprise administration in france */}
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
          {/* photo from gallerie, and active button to pick a image  */}
          <View style={styles.icons}>
            <View style={styles.photo}>
              <Text style={styles.textConfig}> Photo de profil </Text>
              <TouchableOpacity onPress={() => { openImagePickerAsync(); }}>
                {(selectedImage !== null) ? <Image source={{ uri: selectedImage.localUri }} style={{ width: 50, height: 50 }} />
                  : <IconPhoto style={styles.button} />}
              </TouchableOpacity>
            </View>
            {/* When this page are fully filled the button will appear, and it will be
            possivel to progress into the following page */}
            <View>
              <Button
                onPress={() => (


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
\