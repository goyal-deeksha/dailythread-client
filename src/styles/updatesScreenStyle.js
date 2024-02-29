import { StyleSheet } from "react-native";
import { themeColors } from "../theme/theme";

export default styles = StyleSheet.create({
  updatesContainer: {
    justifyContent: "center",
    flex: 1,
  },
  updatesForm: {
    gap: 24,
    paddingHorizontal: 10,
  },
  inputWrapper: {},
  label: {
    color: themeColors.bgColor(1),
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: themeColors.bgColor(0.3),
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 18,
    lineHeight: 28,
    backgroundColor: "#fff",
  },
  submitBtnBox: {
    alignItems: "center",
  },
  submitBtn: {
    width: "100%",
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: themeColors.secondaryText(1),
    backgroundColor: themeColors.secondaryText(1),
  },
  btnText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
