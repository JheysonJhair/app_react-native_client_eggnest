import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LineChartComponent from "../../components/graphics/LineChartComponent ";
import { dataTemperatura } from "../../api/apiDataTemperatura";
import { dataHumedad } from "../../api/apiDataHumedad";

const ReportScreen = () => {
  const currentDate = new Date();
  const [apiData, setApiData] = useState([]);
  const [apiData2, setApiData2] = useState([]);

  const [actualizarDatos, setActualizarDatos] = useState(true);
  const [fechaInicio, setFechaInicio] = useState("");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  const getCurrentDate = () => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  };

  useEffect(() => {
    setFechaInicio(getCurrentDate());
    const fetchData = async () => {
      try {
        const response = await dataTemperatura(50);
        setApiData(response);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error.message);
      }
    };
    const fetchData1 = async () => {
      try {
        const response = await dataHumedad(50);
        setApiData2(response);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error.message);
      }
    };

    const intervalId = setInterval(() => {
      fetchData();
      fetchData1();
      setActualizarDatos((prev) => !prev);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [actualizarDatos]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos estadísticos</Text>

      <Text style={styles.text00}>Fecha: {fechaInicio}</Text>
      <Text style={styles.text00}>
        Hora: {hours}:{minutes}
      </Text>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Temperatura: </Text>
        <Text>Ultima temperatura: {apiData[49]} </Text>
        <LineChartComponent data={apiData} />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Humedad: </Text>
        <Text>Ultima humedad: {apiData2[49]} </Text>
        <LineChartComponent data={apiData2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text00: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ReportScreen;
