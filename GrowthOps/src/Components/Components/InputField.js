import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputField = ({
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  placeholder,
  maxLength,
  onSubmitEditing,
  returnKeyType,
  autoFocus,
  inputStyle,
}) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        autoCorrect={false}
        autoFocus={autoFocus}
        placeholder={placeholder}
        placeholderTextColor="rgb(199,199,205)"
        onSubmitEditing={onSubmitEditing}
        style={inputStyle ? inputStyle : styles.inputStyle}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        maxLength={maxLength}
        returnKeyType={returnKeyType}
        autoCapitalize="none"
      />
    </View>
  );
};

InputField.defaultProps = {
  secureTextEntry: false,
  keyboardType: 'default',
  maxLength: 20,
  returnKeyType: 'done',
  autoFocus: false,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'normal',
    width: '100%',
  },
});

const Memoiz = React.memo(InputField);

export default Memoiz;
