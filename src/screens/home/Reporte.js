import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ReportScreen = () => {
  // Mover la declaración de getCurrentDate antes de su uso
  const getCurrentDate = () => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  };

  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const fechaInicio = getCurrentDate();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos estadísticos</Text>

      <Text style={styles.text00}>Fecha: {fechaInicio}</Text>
      <Text style={styles.text00}>Hora: {hours}:{minutes}</Text>
      <Image
        style={styles.chartImage}
        source={{ uri: "https://i.blogs.es/bd7f0c/control-z-nueva-serie-original-netflix-mexico/1366_2000.png" }}
      />
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
  chartImage: {
    width: '100%',
    height: 200, 
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ReportScreen;
