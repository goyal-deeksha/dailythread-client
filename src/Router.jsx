import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ClockIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "react-native-heroicons/solid";
import { themeColors } from "./theme/theme";

// Routes
import UpdatesTab from "./routes/updates/UpdatesTab";
import ProfileTab from "./routes/profile/ProfileTab";
import UpdateHistoryTab from "./routes/updateHistory/UpdateHistoryTab";

// Unautherised Screens
import WelcomeScreen from "./screens/WelcomeScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import VerifyEmailScreen from "./screens/VerifyEmailScreen";
import Login from "./screens/Login";
import { Platform } from "react-native";
import AdminScreen from "./adminScreens/AdminScreen";
import EmployeeScreen from "./adminScreens/EmployeeScreen";
import EmployeeList from "./adminScreens/EmployeeList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router() {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    console.log("User", user);
  }, [user]);

  const getTabTitle = (routeName) => {
    switch (routeName) {
      case "ProfileTab":
        return "Profile";
      case "UpdatesTab":
        return "Updates";
      case "UpdateHistoryTab":
        return "History";
      default:
        return "";
    }
  };

  const getTabIcon = (route, focused, color, size) => {
    let iconColor = focused
      ? themeColors.secondaryText(1)
      : themeColors.bgColor(1);
    switch (route.name) {
      case "ProfileTab":
        return <UserIcon size={size} color={iconColor} />;
      case "UpdatesTab":
        return <ChatBubbleOvalLeftEllipsisIcon size={size} color={iconColor} />;
      case "UpdateHistoryTab":
        return <ClockIcon size={size} color={iconColor} />;
      default:
        return null;
    }
  };

  if (user) {
    if (user === "testing3@gmail.com") {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AdminScreen">
            <Stack.Screen
              name="AdminScreen"
              component={AdminScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmployeeList"
              component={EmployeeList}
              // options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmployeeScreen"
              component={EmployeeScreen}
              // options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={ProfileTab}
          screenOptions={({ route }) => ({
            title: getTabTitle(route.name),
            tabBarIcon: ({ focused, color, size }) =>
              getTabIcon(route, focused, color, size),
            tabBarIconStyle: { paddingBottom: 12 },
            tabBarStyle: { minHeight: 65, paddingVertical: 14 },
            tabBarLabelStyle: {
              fontSize: 14,
              paddingBottom: Platform.OS === "ios" ? 0 : 8,
              fontWeight: "600",
              color: themeColors.bgColor(1),
            },
          })}
        >
          <Tab.Screen
            name="ProfileTab"
            component={ProfileTab}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="UpdatesTab"
            component={UpdatesTab}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="UpdateHistoryTab"
            component={UpdateHistoryTab}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccountScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VerifyEmail"
            component={VerifyEmailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
