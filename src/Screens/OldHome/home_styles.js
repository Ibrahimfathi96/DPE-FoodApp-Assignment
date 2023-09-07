import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  borderView: {
    width: "65%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "green",
  },
  text: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  image: { width: 200, height: 200, borderRadius: 16 },
});
export default HomeStyles;
