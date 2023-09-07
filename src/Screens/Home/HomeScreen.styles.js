import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30,
    marginHorizontal: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: "300",
    marginLeft: 20,
  },
  text2: {
    fontSize: 40,
    fontWeight: "500",
    marginLeft: 20,
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  searchView: {
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal: 20,
  },
  selectedCardMainView: {
    borderRadius: 20,
    marginVertical: 16,
    marginLeft: 20,
    backgroundColor: "#F5CA48",
    elevation: 10,
  },
  unSelectedCardMainView: {
    borderRadius: 20,
    marginVertical: 20,
    marginLeft: 20,
    backgroundColor: "white",
    elevation: 10,
  },
  cardView: {
    width: 100,
    height: 180,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectedIconView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: "white",
  },
  unSelectedIconView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: "#F5918E",
  },
  popularCardMainView: {
    marginTop: 20,
    alignItems: "center",
  },
  popularCardView: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 30,
    elevation: 10,
    width: SCREEN_WIDTH * 0.9,
    height: 210,
    overflow: "hidden",
    paddingTop: 20,
  },
  leftView: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topOfTheWeekRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  addIconView: {
    flex: 3,
    backgroundColor: "#F5CA48",
    borderTopRightRadius: 30,
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  ratingView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginLeft: 16,
  },
});
export default styles;
