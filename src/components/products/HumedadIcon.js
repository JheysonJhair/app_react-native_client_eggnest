import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const HumedadIcon = ({ humedad }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('blue');

  useEffect(() => {
    if (humedad < 54) {
      setColor('#9dd1f2');
    } else if (humedad > 54 && humedad < 60.5) {
      setColor('#000be5');
    } else if ( humedad > 60.5) {
      setColor('#ff002e');
    }

    if (viewRef.current) {
      viewRef.current.pulse(800);
    }
  }, [humedad]);

  return (
    <Animatable.View
      ref={viewRef}
      style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}
    >
      <FontAwesome name="tint" size={50} color={color} />
      <Text style={{ color }}>{humedad}%</Text>
    </Animatable.View>
  );
};

export default HumedadIcon;