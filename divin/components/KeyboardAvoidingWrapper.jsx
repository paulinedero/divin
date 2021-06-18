import React from 'react';

// keyboard avoiding view, in each component before <view>
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const KeyboardAvoidingWrapper = ({ children }) => {
  console.log('keyboard acctivated'); //can be removed, as like return (
  return (
    <KeyboardAvoidingView >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
