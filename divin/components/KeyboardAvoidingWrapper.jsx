import React from 'react';

// <keyboard avoiding view>, in each component before <view>
import {
  KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform,
} from 'react-native';

const KeyboardAvoidingWrapper = ({ children }) => {
  {/*keyboard_component works well in every device with info in line 11*/ }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
