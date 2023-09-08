import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  signUpText: {
    fontSize: 50,
    color: "#2BC5CD",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginBottom: 10,
    height: 60,
    elevation: 12,
    shadowColor: "#1C90CA",
    width: 300,
    fontSize: 20,
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: "white",
  },
  inputView: {
    width: 300,
  },
  text1: {
    textAlign: "center",
    color: "white",
    fontSize: 26,
    fontWeight: "500",
  },
  text2: {
    textAlign: "center",
    marginVertical: 20,
    color: "#27CEBA",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    marginTop: 16,
    elevation: 12,
    shadowColor: "#1C90CA",
    paddingVertical: 16,
    backgroundColor: "#1592D7", //1891D9 12BCCE 17A7D4
    borderRadius: 40,
  },
});

export default styles;
