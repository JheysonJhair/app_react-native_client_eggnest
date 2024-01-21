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
  return (
    <View style={styles.content2}>
      <Animatable.View animation="fadeIn" duration={1000} style={styles.focoContainer}>
        {iconoNombre === 'fan' ? (
          <MaterialCommunityIcons name={iconoNombre} size={65} color={encendido ? colorEncendido : '#565557'} />
        ) : (
          <FontAwesome name={iconoNombre} size={65} color={encendido ? colorEncendido : '#565557'} />
        )}
      </Animatable.View>

      <View style={styles.botonesContainer}>
        <TouchableOpacity disabled={encendido} onPress={onEncender}>
          <FontAwesome
            name="power-off"
            size={26}
            marginRight={5}
            color={encendido ? colorEncendido : '#565557'}
          />
        </TouchableOpacity>

        <TouchableOpacity disabled={!encendido} onPress={() => { console.log("Intentando apagar"); onApagar(); }}>
          <FontAwesome name="power-off" size={26} marginLeft={5} color={!encendido ? colorApagado : '#565557'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  content2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  focoContainer: {
    marginBottom: 10,
  },
  botonesContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
};

export default ControlComponent;
