import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { themeColors } from "../theme/theme";
import styles from "./../styles/pieStyle.js";

const screenWidth = Dimensions.get("window").width;

export default () => {
  const data = [
    {
      name: "Billable Hours",
      hours: 150,
      color: themeColors.secondaryText(1),
    },
    {
      name: "Non-Billable Hours",
      hours: 60,
      color: themeColors.bgColor(1),
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <View style={styles.container}>
      {/* PieChart */}
      <View style={styles.chartContainer}>
        <PieChart
          data={data}
          width={screenWidth}
          height={350}
          chartConfig={chartConfig}
          accessor={"hours"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[screenWidth / 2 - 250 / 2, 0]}
          absolute
          hasLegend={false}
          style={{}}
        />
      </View>

      {/* Legends */}
      <View style={styles.legendContainer}>
        <View style={styles.legendWrapper}>
          {data.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={{
                  width: 18,
                  height: 18,
                  backgroundColor: item.color,
                  marginRight: 10,
                  borderRadius: 20,
                }}
              />
              <Text style={styles.legend}>
                {item.name} ({item.hours})
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
