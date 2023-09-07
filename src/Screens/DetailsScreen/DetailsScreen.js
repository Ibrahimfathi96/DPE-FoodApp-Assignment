import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./DetailsScreen.styles";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.headerLeftIconView}>
            <Icon name="arrow-back-ios" color={"black"} size={14} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("Starred");
          }}
        >
          <View style={styles.headerRightIconView}>
            <Icon name="star" color={"white"} size={14} />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text2}>Primavera</Text>
        <Text style={styles.text2}>Pizza</Text>
      </View>
    </View>
  );
}
