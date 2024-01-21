import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  useFonts,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.vectorImage}
          resizeMode="contain"
        />

        <Animatable.Text animation="flipInX" style={styles.containerLogoText}>
          EGGNEST
        </Animatable.Text>
      </View>
      <Animatable.Text
        animation="flipInX"
        style={styles.containerLogoTextRespaldo}
      >
        Incubadora con IOT
      </Animatable.Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff9800",
  },
  containerLogo: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogoText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 10,
    textAlign: "center",
  },
  containerLogoTextRespaldo: {
    color: "#333233",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 2,
    paddingTop: 10,
    textAlign: "center",
    marginBottom: 70,
  },
  vectorImage: {
    width: 150,
    height: 150,
  },
});

export default LoadingScreen;
