import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      placeholderTextColor="#C6CBD9"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f4f4f4",
    borderColor: "#e5e3e3",
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
    color: "#333",
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Input;
