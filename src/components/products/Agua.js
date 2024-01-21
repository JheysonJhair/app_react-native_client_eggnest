import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';

const AguaIcon = ({ velocidad }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('gray');

  useEffect(() => {
    if (velocidad === 'baja') {
      setColor('#09b2f4');
    } else if (velocidad === 'media') {
      setColor('#0958f4');
    } else if (velocidad === 'alta') {
      setColor('#0132b7');
    } else {
      setColor('gray');
    }

    if (viewRef.current) {
      viewRef.current.pulse(800);
    }
  }, [velocidad]);

  return (
    <Animatable.View
      ref={viewRef}
      style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}
    >
      <MaterialCommunityIcons name="barrel" size={50} color={color} />
      <Text style={{ color }}>{velocidad}</Text>
    </Animatable.View>
  );
};

export default AguaIcon;