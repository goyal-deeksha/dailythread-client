import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import { themeColors } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function CreateAccountScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Simple email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation
  const isValidPassword = (password) => {
    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const createAccount = async () => {
    try {
      if (!email || !password || !confirmPassword) {
        Alert.alert("Please fill all fields");
        return;
      }
      if (!isValidEmail(email)) {
        Alert.alert("Error", "Invalid email address");
        return;
      }
      // if (!isValidPassword(password)) {
      //   Alert.alert("Invalid password");
      //   return;
      // }
      if (!email || !password || !confirmPassword) {
        Alert.alert("Please fill all fields");
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigation.navigate("VerifyEmail");
    } catch (error) {
      console.log("Create Account Error", error.message);
    }
  };

  return (
    <SafeAreaView style={s`mx-8 items-center justify-center flex-1`}>
      <KeyboardAvoidingView
        style={{
          ...s`w-full`,
        }}
      >
        <View
          style={{
            ...s`w-full`,
            gap: 28,
          }}
        >
          <View style={{ gap: 28 }}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                ...s`px-5 py-3 text-xl border border-b-4 rounded-lg`,
                borderColor: themeColors.bgColor(0.3),
                lineHeight: 24,
                color: themeColors.regularText,
              }}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              style={{
                ...s`px-5 py-3 text-xl border border-b-4 rounded-lg`,
                borderColor: themeColors.bgColor(0.3),
                lineHeight: 24,
                color: themeColors.regularText,
              }}
            />
            <View>
              <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
                style={{
                  ...s`px-5 py-3 text-xl border border-b-4 rounded-lg`,
                  borderColor: themeColors.bgColor(0.3),
                  lineHeight: 24,
                  color: themeColors.regularText,
                }}
              />
              <Text style={s`px-1 mt-1 text-warmGray-500`}>
                Password should contains at least 8 characters including one
                uppercase, one lowercase and one one special character
              </Text>
            </View>
          </View>
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
              onPress={createAccount}
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
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
