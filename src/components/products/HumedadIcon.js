import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const HumedadIcon = ({ humedad }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('blue');

  useEffect(() => {
    if (humedad < 30) {
      setColor('#30afff');
    } else if (humedad > 70) {
      setColor('#000be5');
    } else {
      setColor('#0f6bdb');
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