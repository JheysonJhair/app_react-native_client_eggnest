import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import BirdInfo from "../../components/products/BirdInfo";
import BirdInfoDetails from "../../components/products/BirdInfoDetails";
import ButtonTwo from "../../components/forms/ButtonTwo";
import Button from "../../components/forms/Button";
import ControlComponent from "../../components/products/ControlComponent";

import TemperaturaIcon from "../../components/products/TemperaturaIcon";
import HumedadIcon from "../../components/products/HumedadIcon";
import AguaIcon from "../../components/products/Agua";

import { getUserData } from "../../api/apiGetTemperaturaHumedad";
import { updateAutomatico } from "../../api/apiControlAutomatico";

const MainScreen = ({ route }) => {
  const navigation = useNavigation();
  const { userData } = route.params;

  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const fechaInicio = userData.Huevos[0].FechaInicio;
  const fechaFormateada = new Date(fechaInicio).toLocaleDateString();

  const [temperatura, setTemperatura] = useState(null);
  const [humedad, setHumedad] = useState(null);

  const [focoEncendido, setFocoEncendido] = useState(false);
  const [ventiladorEncendido, setVentiladorEncendido] = useState(false);

  const fechaInicioObj = new Date(fechaInicio);
  const fechaActualObj = new Date();
  const diferenciaDias = Math.floor(
    (fechaActualObj - fechaInicioObj) / (1000 * 60 * 60 * 24)
  );

  useEffect(() => {
    const fetchDataInterval = setInterval(async () => {
      try {
        const data = await getUserData();
        setTemperatura(data.valorTemperatura);
        setHumedad(data.valorHumedad);
      } catch (error) {
        setError(error.message);
      }
    }, 4000);

    return () => clearInterval(fetchDataInterval);
  }, []);

  const handleBotonAutomatico = () => {
    updateAutomatico(1)
      .then(() => {
        console.log("Boton automático encendido");
        setMostrarMensaje(true);
      })
      .catch((error) => console.error("Error boton automatico:", error));
  };

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
          <FontAwesome name="undo" size={21} color="black" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <FontAwesome name="bell" size={21} marginLeft={10} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.h1}>
        <Text style={styles.textColor}>Hola </Text>
        {userData.user.Nombre}, Bienvenido
      </Text>

      <View style={styles.logoAndInfoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.infoContainerImage}>
          {mostrarMensaje && (
            <Text style={styles.text00}>Botón automático habilitado</Text>
          )}
          <BirdInfo
            tipo={userData.Huevos[0].Tipo}
            ubicacion="Bella vista baja"
            diferenciaDias={diferenciaDias}
          />
        </View>
      </View>
      <BirdInfoDetails
        diferenciaDias={diferenciaDias}
        fechaFormateada={fechaFormateada}
      />
      <Text style={styles.h1}>Controles</Text>
      <View style={styles.containerTemperaturaHumedad}>
        <View style={styles.leftContainer}>
          <View style={styles.leftInnerContainer}>
            <AguaIcon velocidad="media" />
            <TemperaturaIcon temperatura={temperatura} />
            <HumedadIcon humedad={humedad} />
          </View>
        </View>

        <View style={styles.rightContainer}>
          <ControlComponent
            encendido={ventiladorEncendido}
            onEncender={() => {
              console.log("VENTILADOR ENCENDIDO");
            }}
            onApagar={() => {
              console.log("VENTILADOR APAGADO");
            }}
            iconoNombre="fan"
            colorEncendido="#2859ad"
            colorApagado="#565557"
          />

          <ControlComponent
            encendido={focoEncendido}
            onEncender={() => {
              console.log("FOCO ENCENDIDO");
            }}
            onApagar={() => {
              console.log("FOCO APAGADO");
            }}
            iconoNombre="lightbulb-o"
            colorEncendido="#f4b415"
            colorApagado="#565557"
          />
        </View>
      </View>
      <ButtonTwo
        title="Control Automático"
        onPress={() => handleBotonAutomatico()}
      />
      <Button title="Ver detalles" onPress={() => handleVerDetalles()} />
      <Text style={styles.h1}>Proceso de incubación</Text>
      <View style={styles.containerGif}>
        <View style={styles.outerContainer}>
          <View style={[styles.centerChild]}>
            <Image
              source={{
                uri: "https://media0.giphy.com/media/Y1Vq94Ivx0EtG/giphy.gif?cid=ecf05e47xcg4psz6jijexl0cyoucgcnwzdtwxbu1mhsrwg9g&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              }}
              style={[styles.gif]}
            />
          </View>
        </View>
      </View>
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
  textColor: {
    color: "#d39400",
    fontSize: 18,
    fontFamily: "Montserrat_800ExtraBold",
  },
  h1: {
    fontSize: 18,
    fontFamily: "Montserrat_800ExtraBold",
  }, //
  logoAndInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  logoContainer: {
    marginRight: 20,
    backgroundColor: "#eae8e8",
    borderRadius: 10,
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text00: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#48C26C",
  },
  //
  containerTemperaturaHumedad: {
    flexDirection: "row",
    height: 110,
    marginBottom: 20,
  },
  leftContainer: {
    flex: 6,
    paddingTop: 10,
    height: "100%",
  },
  leftInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  //
  containerGif: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  gif: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  outerContainer: {
    flexDirection: "row",
    width: "100%",
  },
  centerChild: {
    flex: 3,
  },
  //
  rightContainer: {
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  }
});

export default MainScreen;
