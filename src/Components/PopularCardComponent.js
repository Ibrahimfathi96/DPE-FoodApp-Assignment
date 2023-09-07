import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "../Screens/Home/HomeScreen.styles";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function PopularCardComponent({ isLastItem }) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        console.log("Go To Details Screen");
        navigation.navigate("DetailsScreen");
      }}
    >
      <View
        style={[styles.popularCardMainView, isLastItem && { marginBottom: 20 }]}
      >
        <View style={styles.popularCardView}>
          <View style={styles.leftView}>
            <View style={{ marginLeft: 20 }}>
              <View style={styles.topOfTheWeekRow}>
                <Icon
                  color={"#F5CA48"}
                  name="star"
                  size={22}
                  style={{ marginRight: 6 }}
                />
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  top of the week
                </Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Primavera Pizza
                </Text>
              </View>

              <View style={{ marginVertical: 4 }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}
                >
                  Weight 540 gr
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.addIconView}>
                <Icon
                  name="add"
                  onPress={() => {
                    console.log("added");
                  }}
                />
              </View>
              <View style={styles.ratingView}>
                <Icon
                  color={"black"}
                  name="star"
                  size={22}
                  style={{
                    marginRight: 6,
                  }}
                />
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>5.0</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 4 }}>
            <Image
              source={require("../../assets/images/pizza1.png")}
              resizeMode="contain"
              style={{ width: 300 }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
