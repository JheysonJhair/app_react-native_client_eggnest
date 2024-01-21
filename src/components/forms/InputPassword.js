import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputPassword = ({ placeholder, onChangeText, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        placeholderTextColor="#C6CBD9"
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
        <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#e5e3e3",
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
    marginVertical: 10,
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  input: {
    flex: 1,
    color: "#333",
    fontSize: 16,
    paddingEnd: 10,
  },
});

export default InputPassword;
