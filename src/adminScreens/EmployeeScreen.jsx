import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Pie from "../components/Pie";

export default function EmployeeScreen() {
  const route = useRoute();
  const { id } = route.params;
  console.log(id);
  return (
    <SafeAreaView>
      <Pie />
      <Text>EmployeeScreen</Text>
    </SafeAreaView>
  );
}
