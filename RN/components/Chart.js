import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit"; const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(55, 55, 55, ${opacity})`,
  strokeWidth: 3,
  barPercentage: 11,
  useShadowColorFromDataset: true,
  barPercentage:1,
  decimalPlaces:0
};

export default function Chart(props) {
  const data = {
    labels: ["7", "6", "5", "4", "3", "2", "1", "오늘"],
    datasets: [
      {
        data: props.items.dangn,
        color: (opacity = 0) => `rgba(249, 161, 74)`,
        strokeWidth: 3 // optional
      },
      {
        data: props.items.bunjang,
        color: (opacity = 0) => `rgba(250, 105, 136)`,
        strokeWidth: 3 // optional
      },
      {
        data: props.items.joongna,
        color: (opacity = 0) => `rgba(47, 185, 105)`,
        strokeWidth: 3 // optional
      },
      {
        data: props.items.all,
        color: (opacity = 0) => `rgba(127, 186, 226)`,
        strokeWidth: 3 // optional
      },
    ],
    legend: ["당근", "번개", "중고나라", "평균"] // optional
  };

  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <LineChart
        data={data}
        width={screenWidth-10}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
}

