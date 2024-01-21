import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import { loginUser } from "../../api/apiUser";

import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import InputPassword from "../../components/forms/InputPassword";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = async (email, password) => {
    try {
      if (!email || !password) {
        Alert.alert("Campos vacíos", "Por favor, complete todos los campos.");
        return;
      }
      if (email.toLowerCase() === "admin" && password === "admin") {
        navigation.navigate("Admin");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert(
          "Correo electrónico inválido",
          "Ingresa un correo electrónico válido."
        );
        return;
      }

      if (!email.toLowerCase().endsWith("@gmail.com")) {
        Alert.alert(
          "Correo electrónico no válido",
          "Por favor, utiliza una cuenta de Gmail."
        );
        return;
      }
      const response = await loginUser(email, password);
      const sizeOfResponse = Object.keys(response).length;

      if (sizeOfResponse === 1) {
        Alert.alert("Error", "Usted no se registró", [{ text: "OK" }]);
      } else {
        navigation.navigate("Main", { userData: response });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.vectorImage}
        resizeMode="contain"
      />
      <Text style={styles.h1}>Iniciar sesión</Text>

      <View style={styles.formContainer}>
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <InputPassword
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Button
          title="Ingresar"
          onPress={() => onHandleLogin(email, password)}
        />
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>¿No tienes una cuenta?</Text>
        <Text style={styles.signUpLink}> Contáctanos</Text>
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
    marginTop: 20,
  },
  formContainer: {
    width: "80%",
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: "#FF9800",
    fontSize: 14,
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    color: "#333",
  },
  signUpLink: {
    fontSize: 14,
    color: "#FFC340",
    fontWeight: "bold",
  }
});

export default Login;
