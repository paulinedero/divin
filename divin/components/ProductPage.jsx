import React, { useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
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

useEffect(() => {
  axios
    .get('http://192.168.1.54:3000/:farmerId/products/') // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost" (with http"S") is to be showned via the browser window
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setCountries(data);
    });
}, []);

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
          </View>
          <View style={styles.greenBack}></View>
        </SafeAreaView >
      </ScrollView >
    </KeyboardAvoidingWrapper >
  )
};
