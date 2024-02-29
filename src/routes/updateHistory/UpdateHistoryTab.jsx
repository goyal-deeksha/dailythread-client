import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdateHistory from "./../../screens/UpdateHistory";

const Stack = createNativeStackNavigator();

export default function UpdateHistoryTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UpdateHistory"
        component={UpdateHistory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
