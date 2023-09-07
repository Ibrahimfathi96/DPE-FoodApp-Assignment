import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30,
    marginRight: 20,
  },
  headerLeftIconView: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    paddingLeft: 6,
    borderColor: "grey",
  },
  headerRightIconView: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F5CA48",
    justifyContent: "center",
    paddingRight: 2,
  },
  text1: {
    fontSize: 20,
    fontWeight: "300",
  },
  text2: {
    fontSize: 40,
    fontWeight: "500",
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
