import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MainScreen = ({ route }) => {
  const navigation = useNavigation();
  const { userData } = route.params;
  const handleVerDetalles = () => {
    navigation.navigate("Report");
  };

  const toggleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleLogin}>
          <FontAwesome name="outdent" size={21} color="black" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <FontAwesome
              name="bell"
              size={21}
              marginLeft={10}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.text1}>
        <Text style={styles.textColor}>Hola </Text>
        {userData.user.Nombre}, Bienvenido
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleVerDetalles}>
        <Text style={styles.buttonText}>Ver detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f0",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerIcons: {
    flexDirection: "row",
  },
  boton: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MainScreen;
