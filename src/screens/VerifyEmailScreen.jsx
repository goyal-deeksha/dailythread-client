import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { themeColors } from "../theme/theme";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function VerifyEmailScreen() {
  const navigation = useNavigation();
  const params = useRoute();

  console.log(params);

  const verifyEmail = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={s`mx-8 items-center justify-center flex-1`}>
      <View style={{ ...s`w-full`, gap: 20 }}>
        <View>
          <Text
            style={{ ...s`font-bold text-3xl`, color: themeColors.bgColor(1) }}
          >
            Verify Your Email
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <Text
            style={{ ...s`font-base text-lg`, color: themeColors.regularText }}
          >
            We have sent an OTP to your email. Please enter OTP to verify your
            email.
          </Text>
          <TextInput
            placeholder="OTP"
            style={{
              ...s`px-5 py-3 font-base text-lg border rounded-lg`,
              color: themeColors.bgColor(1),
              lineHeight: 20,
              borderColor: themeColors.bgColor(0.3),
              color: themeColors.regularText,
            }}
          />
          <View style={s`flex-row justify-between`}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                ...s`px-4 py-2 border rounded-lg`,
                borderColor: themeColors.secondaryText(1),
                backgroundColor: themeColors.secondaryText(1),
              }}
            >
              <Text
                style={{
                  ...s`text-xl font-bold`,
                  color: "#fff",
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={verifyEmail}
              style={{
                ...s`px-4 py-2 border rounded-lg`,
                borderColor: themeColors.secondaryText(1),
                backgroundColor: themeColors.secondaryText(1),
              }}
            >
              <Text
                style={{
                  ...s`text-xl font-bold`,
                  color: "#fff",
                }}
              >
                verify
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
