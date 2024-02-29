import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import { themeColors } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user.user));
    } catch (error) {
      console.log("Login failed: ", error);
    }
  };
  return (
    <SafeAreaView style={s`mx-8 items-center justify-center flex-1`}>
      <View
        style={{
          ...s`w-full`,
          gap: 28,
        }}
      >
        <View style={{ gap: 28 }}>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            style={{
              ...s`px-5 py-3 text-xl border rounded-lg`,
              borderColor: themeColors.bgColor(0.3),
              lineHeight: 24,
              color: themeColors.regularText,
            }}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={{
              ...s`px-5 py-3 text-xl border rounded-lg`,
              borderColor: themeColors.bgColor(0.3),
              lineHeight: 24,
              color: themeColors.regularText,
            }}
          />
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
            onPress={login}
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
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

User = {
  _tokenResponse: {
    displayName: "",
    email: "testing2@gmail.com",
    expiresIn: "3600",
    idToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImExODE4ZjQ0ODk0MjI1ZjQ2MWQyMmI1NjA4NDcyMDM3MTc2MGY1OWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGFpbHl0aHJlYWQtMWI0NDAiLCJhdWQiOiJkYWlseXRocmVhZC0xYjQ0MCIsImF1dGhfdGltZSI6MTcwOTEyMDcxNCwidXNlcl9pZCI6IkRhUXVLRlg5YUhYNlVJUE1zZzVNR2RERFFDQzMiLCJzdWIiOiJEYVF1S0ZYOWFIWDZVSVBNc2c1TUdkRERRQ0MzIiwiaWF0IjoxNzA5MTIwNzE0LCJleHAiOjE3MDkxMjQzMTQsImVtYWlsIjoidGVzdGluZzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RpbmcyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EjpoBgZfH-VGULQBl-5lkSXftyxW0BaSvZZ-DJDpYMNjR0X5GV2lLTW0V08Ec-HGYTkSiRHpkbzulpM9Bi1_39mwTGIXaedalTsbrIyKVo8k1d0MHufximZygHyc6xOub7fERxsVzhViVQy7ufwn0m-VZBKbXXUFGPFIlev9hdU66J0EKWv1LDChbECynsDx28wcRTfcs50T_S_kM89YnDab44GlHpO8sjNet8KpQi-MbqaJEVErN72mpl98vqy09TxgrRJZ9gxLkf84MlZdW_JxUii_oXXhJ-If5kiDVa_RWLVC_JFpiVdARLlbb6sioTskUImz8AY1wVlTrJ1uqQ",
    kind: "identitytoolkit#VerifyPasswordResponse",
    localId: "DaQuKFX9aHX6UIPMsg5MGdDDQCC3",
    refreshToken:
      "AMf-vBz6WSTB6wb8DEk3RP39O2lcIczKF2Ncb_LKPyfLQXghLgvN-WDDjcx3GZtGazdI8LxQjmI3VfX_oVjuLrqYtzKvJyKADWSIJ2uGqGU0YK31N2gmE12uoKDZy5MUDLIGDiwYkMyKNujmjaZVvdlsCYgCKzpySX-aR-xZ2sacBL3sORjpIgypzwE9ADivjjeRu6iZ2uKJOXfeWPvvQEXsETco2JgzvQ",
    registered: true,
  },
  operationType: "signIn",
  providerId: null,
  user: {
    _redirectEventId: undefined,
    apiKey: "AIzaSyAUPdqERf6Oay1RvVVDRNMCKsjugR7UrpA",
    appName: "[DEFAULT]",
    createdAt: "1705487496416",
    displayName: undefined,
    email: "testing2@gmail.com",
    emailVerified: false,
    isAnonymous: false,
    lastLoginAt: "1709120714840",
    phoneNumber: undefined,
    photoURL: undefined,
    providerData: [Array],
    stsTokenManager: [Object],
    tenantId: undefined,
    uid: "DaQuKFX9aHX6UIPMsg5MGdDDQCC3",
  },
};

employeedata1 = {
  about: "My name is Vedant. I am working at codminers.",
  avatar: "",
  created_at: { _nanoseconds: 775000000, _seconds: 1709123863 },
  empContactNo: "",
  empId: "67d80",
  empName: "Patil Vedant",
  experiance: 5,
  facebookUrl: "",
  fullName: "",
  instagramUrl: "",
  linkedinUrl: "",
  prodfileUpdate: false,
  qualification: "B-Tech",
  role: "employee",
  skills: ["React", "python"],
  threadId: "ZhBoy9Y67oW82LuZH4eT",
  updated_at: { _nanoseconds: 775000000, _seconds: 1709123863 },
};
