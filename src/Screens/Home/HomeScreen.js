import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import styles from "./HomeScreen.styles";
import { CategoriesData } from "../../Constants/data";
import PopularCardComponent from "../../Components/PopularCardComponent";

export default function HomeScreen() {
  const [indexCheck, setIndexCheck] = useState(CategoriesData[0].id);
  const popularData = Array.from({ length: 5 }, (_, index) => index.toString());
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          size={40}
          source={require("../../../assets/images/profile.png")}
        />
        <Icon name="segment" type="material" size={32} />
      </View>
      <ScrollView>
        <View>
          <Text style={styles.text1}>Food</Text>
          <Text style={styles.text2}>Delivery</Text>
        </View>

        <View style={styles.searchView}>
          <Icon
            name="search"
            type="material"
            size={30}
            style={{ marginRight: 10 }}
          />

          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Search...."
              style={{ borderBottomWidth: 1 }}
            />
          </View>
        </View>

        <View>
          <Text style={styles.text3}>Categories</Text>
        </View>

        <View>
          <FlatList
            data={CategoriesData}
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
                  index === CategoriesData.length - 1
                    ? { marginRight: 16 }
                    : null,
                ]}
              >
                <TouchableOpacity onPress={() => setIndexCheck(item.id)}>
                  <View style={styles.cardView}>
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      style={{ width: 60, height: 60 }}
                    />
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                    <View
                      style={
                        indexCheck === item.id
                          ? { ...styles.selectedIconView }
                          : { ...styles.unSelectedIconView }
                      }
                    >
                      <Icon
                        name="arrow-forward-ios"
                        type="material-icons"
                        size={14}
                        color={indexCheck === item.id ? "black" : "white"}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View>
          <Text style={styles.text3}>Popular</Text>
        </View>
        <View>
          {popularData.map((_, index) => (
            <PopularCardComponent key={index.toString()} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
