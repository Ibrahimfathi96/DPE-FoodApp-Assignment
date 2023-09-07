import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 40,
    marginRight: 20,
  },
  headerLeftIconView: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    paddingLeft: 6,
    borderColor: "lightgrey",
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
    fontWeight: "bold",
    color: "lightgrey",
  },
  text2: {
    fontSize: 40,
    fontWeight: "500",
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  selectedCardMainView: {
    marginRight: 12,
    marginLeft: 4,
    backgroundColor: "#F5CA48",
    elevation: 6,
    borderRadius: 26,
    marginVertical: 12,
  },
  unSelectedCardMainView: {
    marginRight: 12,
    marginLeft: 4,
    backgroundColor: "white",
    borderRadius: 26,
    elevation: 6,
    marginVertical: 12,
  },
  cardView: {
    width: 130,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonMainView: {
    borderRadius: 25,
    backgroundColor: "#F5CA48",
    marginRight: 20,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  buttonIcon: {
    marginTop: 4,
    marginLeft: 10,
  },
});
