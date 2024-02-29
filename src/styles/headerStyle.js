import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  menuIcon: { marginRight: -8 },
});
