import { StyleSheet } from "react-native";
import { themeColors } from "../theme/theme";

export default styles = StyleSheet.create({
  updateScreen: {
    flex: 1,
  },
  messageBox: {
    flexDirection: "row",
    gap: 6,
    alignItems: "flex-end",
    marginHorizontal: 15,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: themeColors.bgColor(0.3),
    borderRadius: 20,
    flex: 1,
    fontSize: 18,
    lineHeight: 21,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 130,
    backgroundColor: "#fff",
  },
  messageBtn: {
    borderWidth: 1,
    borderColor: themeColors.secondaryText(1),
    borderRadius: 50,
    fontSize: 10,
    padding: 10,
    backgroundColor: themeColors.secondaryText(1),
  },
});
