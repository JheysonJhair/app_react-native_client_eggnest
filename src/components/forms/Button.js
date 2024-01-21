import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={onPress}
    >
      <LinearGradient
        colors={['#F4B415', '#F4B415']}
        style={styles.linearGradient}
      >
        <Text style={styles.textoBoton}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,

    marginBottom: 5,
  },
  linearGradient: {
    borderRadius: 10,
    padding: 15,
    width: '110%',
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 19,
    fontFamily: "Montserrat_800ExtraBold", 
  },
});

export default Button;
