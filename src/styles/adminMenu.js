import { StyleSheet } from "react-native";
import { themeColors } from "../theme/theme";

export default styles = StyleSheet.create({
  modelContainer: {},
  modalView: {
    top: 60,
  },
  modalContent: {
    width: "100%",
    alignItems: "flex-end",
  },
  menuBar: {
    width: "50%",
    height: "auto",
    backgroundColor: "#fff",
    paddingVertical: 2,
    zIndex: 50,
    marginRight: 20,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: themeColors.bgColor(0.06),
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});

User = {
  _tokenResponse: {
    displayName: "",
    email: "testing2@gmail.com",
    expiresIn: "3600",
    idToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImExODE4ZjQ0ODk0MjI1ZjQ2MWQyMmI1NjA4NDcyMDM3MTc2MGY1OWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGFpbHl0aHJlYWQtMWI0NDAiLCJhdWQiOiJkYWlseXRocmVhZC0xYjQ0MCIsImF1dGhfdGltZSI6MTcwOTAzMjM5MiwidXNlcl9pZCI6IkRhUXVLRlg5YUhYNlVJUE1zZzVNR2RERFFDQzMiLCJzdWIiOiJEYVF1S0ZYOWFIWDZVSVBNc2c1TUdkRERRQ0MzIiwiaWF0IjoxNzA5MDMyMzkyLCJleHAiOjE3MDkwMzU5OTIsImVtYWlsIjoidGVzdGluZzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RpbmcyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CwoxW-FqXIeGxPMwoBiIjZS4dwtFp_E_6SJAuaPMLLhMex_hifGIPtsrCIgp7MCh08QQrxsxKeFExwBSvybcM0-KQ9ojoiBT944osQX1EKuwyznH34d_jC4bSsVOnNba8-I-bTE86OKKAMLyC000cRgvzrSwDasazYnyD9KDHNbrQhxwh9RURgAr37fvlRjkHaJyib4lRFYxBq_biFkMLHKneqQA2U8HSUKie3Z23iiWyEu0xWF3Vd63YYSzpxMTfSELTg0BdF7cgh2O7PtGdA7u5klAqsLxWVVV_MVgYESTyqhxGXs4Do5-Hjv37D6BXb_pwGDc28rjPWyJDUBYxg",
    kind: "identitytoolkit#VerifyPasswordResponse",
    localId: "DaQuKFX9aHX6UIPMsg5MGdDDQCC3",
    refreshToken:
      "AMf-vBzQtirC0YKJlykCnpKEb7Udqh_lBVZ0btyXXIBwfF3bGz3hqOjlFRlPyLYGkyK0uMM3RIDHdhXicJYKcLeDxemNf7uz-9UqYTYol-p1CUBsvTqCm_LiOAqTwsmpzqKBoGQp9HXQ9UA2ksnyM27-RWlDNBqhl8WqPgGg_3kIBfAauLTFhaZBsQ4cd1l11RHegzAFTO6CPF_sIi5re9jEw195hDnKMA",
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
    lastLoginAt: "1709032392467",
    phoneNumber: undefined,
    photoURL: undefined,
    providerData: [Array],
    stsTokenManager: [Object],
    tenantId: undefined,
    uid: "DaQuKFX9aHX6UIPMsg5MGdDDQCC3",
  },
};
