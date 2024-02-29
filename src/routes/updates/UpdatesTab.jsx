import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdatesScreen from "../../screens/UpdatesScreen";

const Stack = createNativeStackNavigator();

export default function UpdatesTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UpdatesScreen"
        component={UpdatesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
