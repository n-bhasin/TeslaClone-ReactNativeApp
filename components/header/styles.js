import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 100,
    top: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: { width: 100, height: 20, resizeMode: "contain" },
  menu: { width: 25, height: 20, resizeMode: "contain" },
});

export default styles;
