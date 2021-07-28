import React, { useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Picker,
} from 'react-native';

import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import ImageBanniereProducteur from '../assets/ImageBanniereProducteur.png';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import IconPhoto from './IconPhoto';
import EyeIn from './EyeIn';
import EyeOut from './EyeOut';
import api from '../utils/api';

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
    width: '100%',
    height: '7.5%',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 35,
    backgroundColor: '#448042',
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
    fontSize: 18,
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
  eye: {
    marginRight: '7%',
  },
  adress: {

  },
  textOptimalSize: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginTop: 17,
  },
  inputSize1: {
    fontSize: 15,
    height: 40,
    width: '65%',
    backgroundColor: '#FFFFFF',
  },
  inputSize2: {
    fontSize: 15,
    height: 40,
    width: '30%',
    backgroundColor: '#FFFFFF',
  },
  inputSize3: {
    fontSize: 15,
    height: 40,
    width: '47.5%',
    backgroundColor: '#FFFFFF',
  },
  picker: {
    marginTop: 17,
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    borderColor: 'gray',
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
  alertPass: {
    fontSize: 12,
    color: 'red',
  },
});

// This file allows to signIn in this application
export default function InscriptionsPage(props) {
  // to change into next page
  const goToValidationScreen = () => {
    props.navigation.push('ValidationScreen');
  };

  // personnel info
  const [firstname, onChangeFirstname] = React.useState(''); // to guarantee the insertion of name}
  const [lastname, onChangeLastname] = React.useState(''); // to guarantee the insertion of last name}
  const [birthday, onChangeBirthday] = React.useState(''); // to guarantee the insertion of birthday}
  const [phoneNumber, onChangePhoneNumber] = React.useState(''); // to guarantee the of insert phone number}
  const [email, onChangeEmail] = React.useState(''); // to guarantee the of insert mail}

  // to guarantee the repetion password be showed}
  const [password, setPassword] = React.useState(''); // to guarantee the insertion of passaword}
  const [confirmPassword, setConfirmPassword] = React.useState(''); // to guarantee the insertion of the samme password}
  const [seePassword, setSeePassword] = React.useState(true); // to guarantee password be showed}
  const [seeConfirmPassword, setSeeConfirmPassword] = React.useState(true);

  // contact and entreprise information
  const [tvaNumber, onChangeTvaNumber] = React.useState(''); // to guarantee the insertion of a 1st financial number in france}
  const [siretNumber, onChangeSiretNumber] = React.useState(''); // to guarantee the insertion a 2nd financial number in france}
  const [companyName, onChangeCompanyName] = React.useState(''); // to guarantee the insertion of comapnie name in france}
  const [description, onChangeDescription] = React.useState(''); // to guarantee the insertion of a description extra => asked by the farmer}

  // address can be Updated later
  const [street, onChangeStreet] = React.useState(''); // to guarantee the insertion of an adress from the farmer}
  const [streetNumber, onChangeStreetNumber] = React.useState(''); // to guarantee the insertion of an adress from the farmer}
  const [zipCode, onChangeZipCode] = React.useState(''); // to guarantee the insertion of an adress from the farmer}
  const [city, onChangeCity] = React.useState(''); // to guarantee the insertion of an adress from the farmer}

  // allows to get a selection of availablea countries in database}
  const [countries, setCountries] = React.useState([]);
  // allows to specify from the selection of available countries witch country
  // the farmer will choose
  const [selectCountry, setSelectCountry] = React.useState(null); // }

  // to guarantee the control of a picture from the farmer
  const [selectedImage, setSelectedImage] = React.useState(null); // to guarantee image be showed}

  const valideFirstForm = () => firstname === '' || lastname === '' || birthday === '' || phoneNumber === '' || email === '' || password === '' || confirmPassword === '';
  // to make appear second fields
  const valideSecondForm = () => tvaNumber === '' || siretNumber === '' || companyName === '' || street === '' || streetNumber === '' || zipCode === '' || city === '' || countries === '';
  // to guarantee the control from all fields

  const invalideForm = () => firstname === '' || lastname === '' || birthday === '' || phoneNumber === '' || email === '' || password === '' || confirmPassword === '' || tvaNumber === '' || siretNumber === '' || companyName === '' || street === '' || streetNumber === '' || zipCode === '' || city === '' || selectCountry === '';
  // to guarantee the control from all fields

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

  // the next step is to insert data from farmer form into DataBase
  const inscription = async () => {
    // to adapte all variables between front-end and server
    // exemple: {first_name: firstName}  or {firstName: first_name} helps to 
    // convert the variables names into their corresponding values in the server.
    try {
      const result = await api.axios.post(
        `${api.apiUrl}/authentication/register`,
        {
          firstname,
          lastname,
          birthday,
          email,
          password,
          phone_number: phoneNumber,
          VAT_number: tvaNumber,
          siret_number: siretNumber,
          address: {
            street,
            street_number: streetNumber,
            zip_code: zipCode,
            city,
            country: selectCountry,
          },
          company_name: companyName,
          description,
          // selectedImage, // not use until this moment
        },
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    axios
      .get(`${api.apiUrl}/countries/`)
      .then((res) => res.data)
      .then((data) => {
        setCountries(data);
      });
  }, []);

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
            <Text style={styles.textConfig}> Informations personnelles </Text>
            <SafeAreaView>
              {/* personnal information about the farmer */}
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
                {birthday.length >= 11 || birthday.match(/^[A-Za-z]+$/)
                  ? (
                    <Text style={styles.alertPass}>
                      Le format de la date de naissance doit être respecté
                    </Text>
                  ) : null}
              </View>
              <TextInput
                mode="outlined"
                label="NUMERO DE GSM"
                value={phoneNumber}
                style={styles.input}
                onChangeText={onChangePhoneNumber}
                placeholder="Entrez votre numero de telephone"
                minLength={6}
              />
              <View>
                {((phoneNumber.length <= 6) && (phoneNumber.match(/^[0-9]+$/) !== null))
                  ? (
                    <Text style={styles.alertPass}>
                      Le numero de GSM dois contenir l`indicatif du pays
                    </Text>
                  ) : null}
              </View>
              <View>
                {(phoneNumber.match(/^[A-Za-z]+$/))
                  ? (
                    <Text style={styles.alertPass}>
                      UNIQUEMENT des chiffres
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
                placeholder="Entrez votre e-mail complet"
              />
              <View>
                {(email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi))
                  ? null
                  : (
                    <Text style={styles.alertPass}>
                      Votre e-mail doit être correctement introduit
                    </Text>
                  )}
              </View>
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
                  {/* to hiding the password or showing it when clicked  */}
                  {seePassword ? <EyeOut /> : <EyeIn />}
                </TouchableHighlight>
              </View>
              {/* Password's confirmation and hide 2nd password with buttons */}
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
                  {/* hiding or showing password confirmation  */}
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
                label="NUMERO TVA"
                value={tvaNumber}
                style={styles.input}
                onChangeText={onChangeTvaNumber}
                placeholder="Entrez votre numero TVA"
              />
              <TextInput
                mode="outlined"
                label="NUMERO SIRET"
                value={siretNumber}
                type="number"
                style={styles.input}
                onChangeText={onChangeSiretNumber}
                placeholder="Entrez votre numero SIRET"
              />
              <TextInput
                mode="outlined"
                label="NOM DE ENTREPRISE"
                value={companyName}
                style={styles.input}
                onChangeText={onChangeCompanyName}
                placeholder="Entrez le nom de votre Entreprise"
              />
              <TextInput
                mode="outlined"
                label="DESCRIPTION"
                value={description}
                style={styles.input}
                onChangeText={onChangeDescription}
                placeholder="Entrez une description de votre production"
              />
            </SafeAreaView>
            {/* Information about financial and enterprise administration in france */}
            <Text style={styles.textConfig}>
              Adresse d`exploitation
            </Text>
            <SafeAreaView style={styles.adress}>
              <View style={styles.textOptimalSize}>
                <TextInput
                  mode="outlined"
                  label="RUE"
                  value={street}
                  style={styles.inputSize1}
                  onChangeText={onChangeStreet}
                  placeholder="Entrez votre rue"
                />
                <TextInput
                  mode="outlined"
                  label="NUMERO"
                  value={streetNumber}
                  style={styles.inputSize2}
                  onChangeText={onChangeStreetNumber}
                  placeholder="Nº de rue"
                />
              </View>
              <View>
                {(streetNumber.match(/^[A-Za-z]+$/))
                  ? (
                    <Text style={styles.alertPass}>
                      UNIQUEMENT des chiffres
                    </Text>
                  ) : null}
              </View>
              <View style={styles.textOptimalSize}>
                <TextInput
                  mode="outlined"
                  label="CODE POSTAL"
                  value={zipCode}
                  style={styles.inputSize3}
                  onChangeText={onChangeZipCode}
                  placeholder="Entrez code postal"
                />
                <TextInput
                  mode="outlined"
                  label="VILLE"
                  value={city}
                  style={styles.inputSize3}
                  onChangeText={onChangeCity}
                  placeholder="Entrez votre ville"
                />
              </View>
              <View>
                {(zipCode.match(/^[A-Za-z]+$/))
                  ? (
                    <Text style={styles.alertPass}>
                      UNIQUEMENT des chiffres
                    </Text>
                  ) : null}
              </View>
              <View style={styles.picker}>
                <Picker
                  selectedValue={selectCountry}
                  onValueChange={(itemValue) => setSelectCountry(itemValue)}
                >
                  {countries.map((country) => (
                    <Picker.Item
                      key={country.id}
                      placeholder="Entrez votre ville"
                      label={country.name}
                      value={country.id}
                    />
                  ))}
                </Picker>
              </View>
            </SafeAreaView>
          </View>
          {/* photo from gallerie, and active button to pick a image  */}
          <View style={styles.icons}>
            <View style={styles.photo}>
              <Text style={styles.textConfig}> Photo de profil </Text>
              <TouchableOpacity onPress={() => { openImagePickerAsync(); }}>
                {(selectedImage !== null)
                  ? (
                    <Image
                      source={{ uri: selectedImage.localUri }}
                      style={{ width: 50, height: 50 }}
                    />
                  )
                  : <IconPhoto style={styles.button} />}
              </TouchableOpacity>
            </View>
            {/*
            When this page are FULLY filled, the button s'inscrire' will appear in
            orange background color, and it will be
            possible to progress into the following page
            */}
            < View >
              {
                console.log(
                  firstname,
                  lastname,
                  birthday,
                  email,
                  password,
                  phoneNumber,
                  description,
                  tvaNumber,
                  siretNumber,
                  street,
                  streetNumber,
                  city,
                  selectCountry,
                  companyName,
                )
              }
              < Button
                onPress={() =>
                  // eslint-disable-next-line no-undef
                  (inscription() && goToValidationScreen())
                } // ADD FUNCTION "MAIL SEND" HERE
                title="S'inscrire"
                disabled={invalideForm()}
                color={invalideForm() ? '#616161' : '#FFBD59'}
              />
            </View >
          </View >
        </View >
      </View >
    </KeyboardAvoidingWrapper >
  );
}
