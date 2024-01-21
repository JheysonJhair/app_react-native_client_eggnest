import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BirdInfoDetails = ({ diferenciaDias, fechaFormateada }) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoItem}>
        <Text style={styles.t1}>Tiempo</Text>
        <Text style={styles.t2}>{diferenciaDias} días</Text>
      </View>
      <View style={styles.infoItem3}>
        <Text style={styles.t1}>Fecha inicio</Text>
        <Text style={styles.t2}>{fechaFormateada}</Text>
      </View>
      <View style={styles.infoItem2}>
        <Text style={styles.t1}>Fecha fin</Text>
        {diferenciaDias >= 0 && diferenciaDias <= 7 && (
          <Text style={styles.t2}>1ra semana</Text>
        )}
        {diferenciaDias >= 8 && diferenciaDias <= 14 && (
          <Text style={styles.t2}>2da semana</Text>
        )}
        {diferenciaDias >= 15 && diferenciaDias <= 20 && (
          <Text style={styles.t2}>3ra semana</Text>
        )}
        {diferenciaDias >= 21 && diferenciaDias <= 50 && (
          <Text style={styles.t2}>Finalizando</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    height: 40,
  },
  infoItem: {
    width: "33%",
    height: "100%",
  },
  infoItem2: {
    width: "33%",
    alignItems: "flex-end",
    height: "100%",
  },
  infoItem3: {
    width: "33%",
    alignItems: "center",
    height: "100%",
  },
  t1: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#565557",
  },
  t2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

export default BirdInfoDetails;
