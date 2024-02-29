import { themeColors } from "../theme/theme";

const { StyleSheet } = require("react-native");

export default styles = StyleSheet.create({
  adminScreen: {
    marginHorizontal: 20,
    flex: 1,
    gap: 20,
    // borderWidth: 2,
  },
  datePickerContainer: {
    marginTop: 30,
    gap: 20,
  },
  datePickerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateLabel: {
    fontSize: 20,
    minWidth: 50,
    fontWeight: "500",
    color: themeColors.bgColor(1),
  },
  colonStyle: {
    width: 15,
    fontSize: 20,
    fontWeight: "800",
    color: themeColors.bgColor(1),
  },
  dateInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: themeColors.bgColor(0.3),
  },
  dateInput: {
    fontSize: 18,
    flex: 1,
    height: 40,
    // padding: 4,
    paddingVerticle: 4,
  },
});
