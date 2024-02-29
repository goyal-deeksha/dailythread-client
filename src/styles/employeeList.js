import { themeColors } from "../theme/theme";

const { StyleSheet } = require("react-native");

export default styles = StyleSheet.create({
  employScreen: {
    marginHorizontal: 20,
    flex: 1,
    gap: 20,
    // borderWidth: 2,
  },
  adminTitleBox: {},
  adminTitle: {
    color: themeColors.bgColor(1),
    fontSize: 25,
    fontWeight: "500",
  },
  searchInputBox: {
    borderWidth: 1,
    borderColor: themeColors.bgColor(0.3),
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  searchBtn: {
    fontWeight: "800",
    padding: 8,
    paddingHorizontal: 12,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderLeftWidth: 2,
    borderColor: themeColors.bgColor(0.3),
  },
  searchBtnIcon: {
    color: themeColors.bgColor(1),
  },
  employeeListContainer: {
    // marginTop: 20,
    borderWidth: 1,
    borderColor: themeColors.bgColor(0.3),
    borderRadius: 8,
    flex: 1,
  },
  employeeData: {
    flexDirection: "row",
    padding: 6,
    paddingHorizontal: 20,
  },
  employeeName: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
  },
  viewBtn: {
    backgroundColor: themeColors.secondaryText(1),
    padding: 3,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  viewBtnText: {
    fontSize: 18,
    color: "#fff",
  },
});
