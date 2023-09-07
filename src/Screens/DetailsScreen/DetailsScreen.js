import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./DetailsScreen.styles";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { IngredientsData } from "../../Constants/data";

export default function DetailsScreen() {
  const [indexCheck, setIndexCheck] = useState(IngredientsData[0].id);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
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
          <Text
            style={{
              fontSize: 40,
              fontWeight: "500",
              color: "#F5918E",
              marginVertical: 16,
            }}
          >
            $5.99
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.text1}>Size</Text>
              <Text style={styles.text3}>Meduim 14"</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.text1}>Crust</Text>
              <Text style={styles.text3}>Thin Crust</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.text1}>Delivery in</Text>
              <Text style={styles.text3}>30 mins</Text>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <Image
              source={require("../../../assets/images/pizza1.png")}
              resizeMode="contain"
              style={{ width: 320 }}
            />
          </View>
        </View>

        <View style={{ marginTop: 60, marginBottom: 20 }}>
          <Text style={styles.text3}>Ingredients</Text>
        </View>

        <View>
          <FlatList
            data={IngredientsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <View
                style={[
                  indexCheck === item.id
                    ? { ...styles.selectedCardMainView }
                    : { ...styles.unSelectedCardMainView },
                  index === IngredientsData.length - 1
                    ? { marginRight: 20 }
                    : null,
                ]}
              >
                <TouchableOpacity onPress={() => setIndexCheck(item.id)}>
                  <View style={styles.cardView}>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{ width: 80, height: 80 }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>

      <View style={styles.buttonMainView}>
        <TouchableOpacity
          onPress={() => {
            console.log("Place an order =====> goToPaymentPage");
          }}
        >
          <View style={styles.buttonRow}>
            <Text style={styles.text3}>Place an order</Text>
            <Icon
              name="arrow-forward-ios"
              color={"black"}
              size={16}
              style={styles.buttonIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
