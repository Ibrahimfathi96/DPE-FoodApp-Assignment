import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axiosClient from "../../Api/axiosClient";
import HomeStyles from "./home_styles";

const OldHome = () => {
  const [userData, setUserData] = useState(null);
  const getUserData = async () => {
    try {
      const response = await axiosClient.get("user/4");
      setUserData(response);
    } catch (err) {
      console.log("Error==>", err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  if (!userData) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Loading...</Text>
      </View>
    );
  }
  const { name, location, avatar_url } = userData;
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.borderView}>
        <Image source={{ uri: avatar_url }} style={HomeStyles.image} />
        <View style={{ height: 30 }}></View>
        <Text style={HomeStyles.text}>{name}</Text>
        <Text style={HomeStyles.text}>{location}</Text>
      </View>
    </View>
  );
};

export default OldHome;
