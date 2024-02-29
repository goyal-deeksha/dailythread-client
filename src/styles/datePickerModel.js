import { StyleSheet } from "react-native";
import { themeColors } from "../theme/theme";

export default styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  modalView: {
    width: "100%",
    // borderWidth: 1,
    // borderColor: "red",
    // padding: 25,
    // marginBottom: 30,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent:"flex-end",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    shadowColor: themeColors.bgColor(1),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  datepicker: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  setButtonBox: {
    alignItems: "center",
    marginBottom: 20,
  },
  setButton: {
    alignItems: "center",
    backgroundColor: themeColors.secondaryText(1),
    width: "90%",
    borderRadius: 20,
    paddingVertical: 4,
  },
  setButtonText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },
});
