import { StyleSheet } from "react-native";
import { themeColors } from "../theme/theme";

export default styles = StyleSheet.create({
  messageContainer: {
    paddingHorizontal: 18,
    borderTopWidth: 1,
    borderColor: themeColors.secondaryText(1),
    marginVertical: 16,
  },
  updateDateBox: {
    alignItems: "center",
    marginTop: -13,
  },
  updateDate: {
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: themeColors.secondaryText(1),
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "#fff",
    color: themeColors.secondaryText(1),
  },
  senderInfoWrapper: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
  profilePhoto: {
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  senderName: {
    fontSize: 18,
    fontWeight: "500",
    color: themeColors.bgColor(1),
  },
  messageTime: {
    fontWeight: "500",
  },
  textBox: {
    flexDirection: "row",
    paddingTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 28,
    borderWidth: 1,
    borderColor: themeColors.bgColor(0.3),
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
