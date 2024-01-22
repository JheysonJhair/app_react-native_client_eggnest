import React from "react";
import { View, StyleSheet } from "react-native";

const LineChartComponent = ({ data }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;
  const numberOfPoints = Math.min(50, data.length);

  return (
    <View style={styles.chartContainer}>
      {data.slice(0, numberOfPoints).map((value, index) => (
        <View
          key={index}
          style={[
            styles.chartBar,
            {
              height: ((value - minValue) / range) * 150,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    margin: 3,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 150,
    backgroundColor: "#f0f0f0",
  },
  chartBar: {
    flex: 1,
    backgroundColor: "rgba(0, 122, 255, 0.7)",
    marginHorizontal: 2,
  },
});

export default LineChartComponent;
