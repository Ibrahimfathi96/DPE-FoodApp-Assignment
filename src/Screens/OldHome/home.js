import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axiosClient from "../../api/axiosClient";
import HomeStyles from "./home_styles";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const getUserData = async () => {
    try {
      const response = await axiosClient.get("users/1");
      setUserData(response);
    } catch (err) {
      console.log("Error==>", err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  if (!userData) {
    return <Text>Loading...</Text>;
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

export default Home;
