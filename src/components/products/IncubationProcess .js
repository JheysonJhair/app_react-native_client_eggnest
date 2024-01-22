import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const IncubationProcess = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Proceso de incubación</Text>
      <View style={styles.containerGif}>
        <View style={styles.outerContainer}>
          <View style={styles.centerChild}>
            <Image
              source={{
                uri: "https://media0.giphy.com/media/Y1Vq94Ivx0EtG/giphy.gif?cid=ecf05e47xcg4psz6jijexl0cyoucgcnwzdtwxbu1mhsrwg9g&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              }}
              style={styles.gif}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    marginTop: 20,
  },
  h1: {
    fontSize: 18,
    fontFamily: 'Montserrat_800ExtraBold',
  },
  containerGif: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  gif: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  outerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  centerChild: {
    flex: 3,
  },
});

export default IncubationProcess;
