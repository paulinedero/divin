import React, { useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Picker,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#FFBD59',
  },
  text: {
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 10,
    justifyContent: 'center',
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
  footer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 45,
    minWidth: 400,
    minHeight: 350,
    backgroundColor: '#448042',
  },
});

const invalideForm = () => firstname === '' || lastname === '' || birthday === '' || phoneNumber === '' || email === '' || password === '' || confirmPassword === '' || tvaNumber === '' || siretNumber === '' || companyName === '' || street === '' || streetNumber === '' || zipCode === '' || city === '' || selectCountry === '';
// to guarantee the control from all fields

// the next step is to insert data from farmer form into DataBase
const inscription = async () => {
  // to adapte all variables between front-end and server
  // exemple: {first_name: firstName}  or {firstName: first_name} helps to 
  // convert the variables names into their corresponding values in the server.
  try {
    const result = await axios.post(
      'http://192.168.1.54:3000/:farmerId/products/', // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost" (with http"S") is to be showned via the browser window
      {
        EAN_code: Joi.number(),
        name: Joi.string().alphanum(),
        description: Joi.string(),
        origin: Joi.string().alphanum(),
        farming_type: Joi.number(),
        category: Joi.number(),
        under_category: Joi.number(),
        season_id: Joi.number(),
        transformation: Joi.boolean(),
        nutritional_statement: Joi.string(),
        production_unit: Joi.string().alphanum(),
        production_price: Joi.number(),
        stock_min: Joi.number(),
        stock_max: Joi.number(),
        max_storage_date: Joi.string(),
        purchase_unit: Joi.string(),
        purchase_price: Joi.number(),
        VAT: Joi.number(),
        tag: Joi.string(),
        photo: Joi.string(),
        farmer_id: Joi.number(),
      },
    );
  } catch (err) {
    console.error(err);
  }
};



export default function InscriptionsPage() {
  // to change into next page
  const goTo = () => {
    props.navigation.push('Validation');
  };

  // personnel info
  const [firstname, onChangeFirstname] = React.useState(''); // to guarantee the insertion of name}
  const [lastname, onChangeLastname] = React.useState(''); // to guarantee the insertion of last name}
  const [birthday, onChangeBirthday] = React.useState(''); // to guarantee the insertion of birthday}
  const [phoneNumber, onChangePhoneNumber] = React.useState(''); // to guarantee the of insert phone number}
  const [email, onChangeEmail] = React.useState(''); // to guarantee the of insert mail}

  return (
    <KeyboardAvoidingWrapper>
      <ScrollView>
        <SafeAreaView >
          <View style={styles.container}>
            <StatusBar />
            <View>
              <Image style={styles.ImageBanniereProducteur} source={ImageBanniereProducteur} />
            </View>
            <Text style={styles.title}>Stock actuel </Text>
            <TextInput
              mode="outlined"
              label="NOM"
              value={lastname}
              style={styles.input}
              onChangeText={onChangeLastname}
              placeholder="Entrez votre nom"
              minLength={3}
            />
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
            <Button
              onPress={() => (inscription(), goTo())} // ADD FUNCTION "MAIL SEND" HERE
              title="S'inscrire"
              disabled={invalideForm()}
              color={invalideForm() ? '#616161' : '#FFBD59'}
            />
          </View>
          <View style={styles.greenBack}></View>
        </SafeAreaView >
      </ScrollView >
    </KeyboardAvoidingWrapper >
  )
};