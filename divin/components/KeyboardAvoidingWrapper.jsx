import React from 'react';

// <keyboard avoiding view>, in each component before 1st <View> and after last </View>
// It doesn't work if it is use directly in App
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
