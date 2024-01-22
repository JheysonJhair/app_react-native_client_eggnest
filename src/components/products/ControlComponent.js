import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const ControlComponent = ({
  encendido,
  onEncender,
  onApagar,
  iconoNombre,
  colorEncendido,
  colorApagado,
}) => {
  const getIconColor = () => {
    if (encendido === 1) {
      return '#565557'; 
    } else if (encendido === 0) {
      return colorEncendido; 
    } else if (encendido === 2) {
      return '#48C26C'; 
    }
    return '#565557'; 
  };

  const getPowerButtonColor = () => {
    return encendido === 0 ? colorEncendido : colorApagado;
  };

  return (
    <View style={styles.content2}>
      <Animatable.View animation="fadeIn" duration={1000} style={styles.focoContainer}>
        {iconoNombre === 'fan' ? (
          <MaterialCommunityIcons name={iconoNombre} size={65} color={getIconColor()} />
        ) : (
          <FontAwesome name={iconoNombre} size={65} color={getIconColor()} />
        )}
      </Animatable.View>

      <View style={styles.botonesContainer}>
        <TouchableOpacity  onPress={onEncender}>
          <FontAwesome
            name="power-off"
            size={26}
            marginRight={5}
            color={getPowerButtonColor()}
          />
        </TouchableOpacity>

        <TouchableOpacity  onPress={onApagar}>
          <FontAwesome name="power-off" size={26} marginLeft={5} color={getPowerButtonColor()} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  content2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 3,
    paddingRight: 3,
  },
  focoContainer: {
    marginBottom: 8,
  },
  botonesContainer: {
    flexDirection: 'row',
    marginLeft: 2,
  },
};

export default ControlComponent;
