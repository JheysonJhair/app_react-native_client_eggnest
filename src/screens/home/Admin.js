import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Checkbox from "expo-checkbox";
import { sendFormDataToApi } from "../../api/apiRegistroUsuario";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import InputPassword from "../../components/forms/InputPassword";
import NumericInput from "../../components/forms/NumericInput";

const Admin = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  const [cantidadHuevos, setCantidadHuevos] = useState("");
  const [cantidadDias, setCantidadDias] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [email, setEmail] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");

  useEffect(() => {
    setFechaInicio(getCurrentDate());
  }, []);

  const handleFormSubmit = async () => {
    if (
      cantidadHuevos &&
      usuario &&
      contrasena &&
      email &&
      cantidadDias &&
      fechaInicio
    ) {
      try {
        const formData = {
          Nombre: usuario,
          Email: email,
          Password: contrasena,
          fechaInicio: fechaInicio,
          cantidadHuevo: cantidadHuevos,
          cantidadDias: cantidadDias,
        };

        const responseData = await sendFormDataToApi(formData);
        Alert.alert("Registro completo", [{ text: "Aceptar" }]);
        navigation.navigate("Login");
      } catch (error) {
        console.error("Error en la llamada a la API:", error.message);
        Alert.alert("Error, Vuelva a intentarlo nuevamente", [
          { text: "Aceptar" },
        ]);
      }
    } else {
      alert("Por favor, complete todos los campos y confirme la incubación.");
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={styles.vectorImage}
        resizeMode="contain"
      />
      <Text style={styles.h1}>Registrar</Text>

      <View style={styles.formContainer}>
        <Input
          placeholder="Usuario"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />

        <InputPassword
          placeholder="Contraseña"
          value={contrasena}
          onChangeText={(text) => setContrasena(text)}
        />

        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <NumericInput
          placeholder="Cantidad de Huevos"
          value={cantidadHuevos}
          onChangeText={(text) => setCantidadHuevos(text)}
        />
        <NumericInput
          placeholder="Cantidad de Días"
          value={cantidadDias}
          onChangeText={(text) => setCantidadDias(text)}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={styles.checkboxText}>
            Iniciar incubación ahora{" "}
            <Text style={styles.checkboxText2}>{fechaInicio}</Text>
          </Text>
        </View>
        <Button title="REGISTRATE" onPress={() => handleFormSubmit()} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorImage: {
    width: 150,
    height: 150,
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  formContainer: {
    width: "80%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
  checkboxText2: {
    color: "#fff",
    fontSize: 16,
  },
  checkboxText2: {
    color: "#ff9800",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Admin;
