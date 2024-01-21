import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const BirdInfo = ({ tipo, ubicacion, diferenciaDias }) => {
  return (
    <View>
      <Text style={styles.h2}>TIPO: {tipo}</Text>
      <View style={styles.containerMap}>
        <FontAwesome name="map-marker" size={20} color="#8d4925" />
        <Text style={styles.h33}>{ubicacion}</Text>
      </View>
      <View style={styles.containerMap}>
        {diferenciaDias >= 0 && diferenciaDias <= 12 && (
          <>
            <FontAwesome name="circle" size={13} color="#48c26c" />
            <Text style={styles.h34}>Tu ave favorita en linea!</Text>
          </>
        )}
        {diferenciaDias >= 13 && diferenciaDias <= 19 && (
          <>
            <FontAwesome name="circle" size={13} color="#e7ed36" />
            <Text style={styles.h34}>Tu ave favorita en proceso!</Text>
          </>
        )}
        {diferenciaDias >= 20 && diferenciaDias <= 50 && (
          <>
            <FontAwesome name="circle" size={13} color="#ed3d3d" />
            <Text style={styles.h34}>
              Tu ave favorita está a punto de nacer!!
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = {
  containerMap: {
    flexDirection: "row",
    alignItems: "center",
  },
  h2: {
    fontSize: 18,
    fontFamily: "Montserrat_800ExtraBold",
  },
  h33: {
    fontSize: 14,
    marginLeft: 10,
    color: "#8d4925",
    fontWeight: "bold",
  },
  h34: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#565557",
    marginLeft: 10,
  },
};

export default BirdInfo;
