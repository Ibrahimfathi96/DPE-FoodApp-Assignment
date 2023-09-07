import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
  },
  signUpText: {
    flex: 1,
    fontSize: 50,
    color: "#2BC5CD",
    fontWeight: "bold",
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
  inputView: { flex: 1, width: 300, marginVertical: 10 },
  text1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    textAlign: "center",
    marginVertical: 20,
    color: "#27CEBA",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    marginTop: 16,
    elevation: 12,
    shadowColor: "#1C90CA",
    paddingVertical: 10,
    backgroundColor: "#1592D7",
    borderRadius: 30,
  },
});

export default styles;
